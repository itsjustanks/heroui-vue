#!/usr/bin/env node
// Parses @heroui/styles dist *.styles.d.ts to enumerate every variant key
// each component defines, then checks the corresponding Vue source file(s)
// to see whether each variant is exposed as a prop. Output:
// parity/variant-prop-diff.json + a human summary.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const STYLES_DIR = path.join(REPO, 'node_modules/@heroui/styles/dist/components')
const SRC = path.join(REPO, 'src')
const OUT = path.join(REPO, 'parity/variant-prop-diff.json')

/**
 * Extract the FIRST variant block from a `tv()` styles definition (TVReturnType<{...}>).
 * Returns the top-level keys (e.g. ["fullWidth", "isIconOnly", "size", "variant"]).
 */
function extractVariantKeys (dts) {
  const idx = dts.indexOf('TVReturnType<{')
  if (idx === -1) return []
  // Walk braces from the first `{` after TVReturnType< to find the matching `}`
  const start = dts.indexOf('{', idx)
  if (start === -1) return []
  let depth = 0
  let end = -1
  for (let i = start; i < dts.length; i++) {
    if (dts[i] === '{') depth++
    else if (dts[i] === '}') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }
  if (end === -1) return []
  const block = dts.slice(start + 1, end)
  // Top-level keys: lines like `    keyName: {` or `    "kebab-case": {`
  // At minimum indentation inside this block (4 spaces in upstream).
  const keys = []
  const lineRe = /^(\s+)([A-Za-z_$][\w$]*|"[^"]+"):\s*\{/gm
  // First pass: find the minimum indentation level (the variant root)
  let minIndent = Infinity
  let m
  while ((m = lineRe.exec(block)) !== null) {
    if (m[1].length < minIndent) minIndent = m[1].length
  }
  if (minIndent === Infinity) return []
  // Second pass: collect keys at that exact indentation
  lineRe.lastIndex = 0
  while ((m = lineRe.exec(block)) !== null) {
    if (m[1].length === minIndent) {
      const k = m[2].replace(/^"|"$/g, '')
      if (!keys.includes(k)) keys.push(k)
    }
  }
  return keys
}

/** Walk src/<repoFolder> for every .tsx/.ts and collect declared prop names. */
function collectVueProps (repoFolder) {
  const dir = path.join(SRC, repoFolder)
  if (!existsSync(dir)) return null
  const props = new Set()
  function walk (d) {
    for (const name of readdirSync(d)) {
      const p = path.join(d, name)
      const s = statSync(p)
      if (s.isDirectory()) { walk(p); continue }
      if (!/\.(tsx|ts)$/.test(name)) continue
      const src = readFileSync(p, 'utf8')
      // 1) `props: { fooBar: ... }` blocks in defineComponent
      // Match identifier or quoted props (with optional comments inline before colon).
      const propRe = /^\s+(?:\/\*\*[\s\S]*?\*\/\s*)?([A-Za-z_$][\w$]*|"[^"]+"):\s*\{\s*type:/gm
      let m
      while ((m = propRe.exec(src)) !== null) {
        props.add(m[1].replace(/^"|"$/g, ''))
      }
      // 2) shorthand: `propName: { type:` already covered above.
      // 3) destructured `{ size, variant }` in setup -- skip; not a prop declaration.
    }
  }
  walk(dir)
  return props
}

// Build folder → repo-folder map (mirror diff-surface.mjs hosts)
const HOST_MAP = {
  'color-area': 'color-picker',
  'color-field': 'color-picker',
  'color-input-group': 'color-picker',
  'color-picker': 'color-picker',
  'color-slider': 'color-picker',
  'color-swatch': 'color-picker',
  'color-swatch-picker': 'color-picker',
  'list-box-item': 'list-box',
  'list-box-section': 'list-box',
  'menu': 'menubar',
  'menu-item': 'menubar',
  'menu-section': 'menubar',
  'tag': 'tag-group',
  'error-message': 'error-message',
  'field-error': 'field',
  'fieldset': 'field',
  'autocomplete': 'combo-box',
  'radio': 'radio-group',
  'disclosure': 'disclosure',
  'disclosure-group': 'disclosure-group',
}

const result = {}

for (const folder of readdirSync(STYLES_DIR).sort()) {
  const styleDir = path.join(STYLES_DIR, folder)
  if (!statSync(styleDir).isDirectory()) continue
  // Find the *.styles.d.ts file
  const stylesFile = readdirSync(styleDir).find((f) => /\.styles\.d\.ts$/.test(f))
  if (!stylesFile) continue
  const dts = readFileSync(path.join(styleDir, stylesFile), 'utf8')
  const variants = extractVariantKeys(dts)
  if (!variants.length) continue

  const repoFolder = HOST_MAP[folder] || folder
  const props = collectVueProps(repoFolder)
  if (!props) {
    result[folder] = { repoFolder, variants, missing: variants, status: 'missing-folder' }
    continue
  }
  const missing = variants.filter((v) => !props.has(v))
  result[folder] = {
    repoFolder,
    variants,
    declaredProps: variants.filter((v) => props.has(v)),
    missing,
    status: missing.length ? 'gap' : 'ok'
  }
}

writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n')

// Summary
let ok = 0, gaps = 0, missing = 0
const lines = []
for (const [name, info] of Object.entries(result)) {
  if (info.status === 'ok') { ok++; continue }
  if (info.status === 'missing-folder') { missing++; lines.push(`MISSING ${name}: variants=${info.variants.join(',')}`); continue }
  gaps++
  lines.push(`${name} (${info.repoFolder}): missing ${info.missing.join(', ')}  [of: ${info.variants.join(', ')}]`)
}
console.log(`\nVariant-prop audit — ${ok} ok, ${gaps} with gaps, ${missing} missing folders`)
console.log(`Output: ${OUT}\n`)
console.log(lines.join('\n'))
