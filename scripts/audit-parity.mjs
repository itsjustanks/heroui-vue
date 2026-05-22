/**
 * audit-parity — direct, name-matched audit of heroui-vue against HeroUI v3.
 *
 * Two checks, reported per component:
 *   1. API   — compound component name + parts in `src/<x>/index.ts` vs the real
 *              HeroUI source (matched by exported name).
 *   2. DEMO  — JSX component tags in `demos/vue/<x>.tsx` must equal the tags in
 *              `demos/react/<x>.tsx` (the side-by-side must match).
 *
 * Usage:  node scripts/audit-parity.mjs            (full report)
 *         node scripts/audit-parity.mjs --fails    (only divergent components)
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseNamedExports } from './parity-utils.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const HEROUI3 = '/Users/ankit/Downloads/heroui-3/packages/react/src/components'
const VUE_SRC = join(ROOT, 'src')
const VUE_DEMOS = join(ROOT, 'playground/src/demos/vue')
const REACT_DEMOS = join(ROOT, 'playground/src/demos/react')
const SKIP = new Set(['composables', 'icons', 'lib'])
/** heroui-vue families with no HeroUI v3 equivalent — audited as informational. */
const NO_UPSTREAM = new Set(['field', 'item', 'shimmer', 'menubar'])

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '')

/** Every `export const X = Object.assign(Root, { ... })` → { X: [parts] }. */
function compoundsOf (text) {
  const map = {}
  const re = /export const (\w+)\s*=\s*Object\.assign\(\s*[\w.]+\s*,\s*\{([\s\S]*?)\}\s*\)/g
  let m
  while ((m = re.exec(text))) {
    map[m[1]] = [...m[2].matchAll(/([A-Za-z_$][\w$]*)\s*:/g)].map((x) => x[1])
  }
  return map
}

/** Capitalised / dotted JSX tags used in a demo file (skips `Type<Generic>`). */
function tagsOf (text) {
  const tags = new Set()
  for (const m of text.matchAll(/(?<![A-Za-z0-9_])<([A-Z][\w]*(?:\.[A-Z][\w]*)*)/g)) tags.add(m[1])
  return tags
}

// ── scan HeroUI v3 source ────────────────────────────────────────────────────
const heroCompounds = {}
const heroAllNames = new Set()
for (const dir of readdirSync(HEROUI3, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue
  const text = read(join(HEROUI3, dir.name, 'index.ts'))
  Object.assign(heroCompounds, compoundsOf(text))
  for (const name of parseNamedExports(text)) heroAllNames.add(name)
}

// ── scan heroui-vue src ──────────────────────────────────────────────────────
const vueComponents = []
for (const dir of readdirSync(VUE_SRC, { withFileTypes: true })) {
  if (!dir.isDirectory() || SKIP.has(dir.name)) continue
  vueComponents.push({ dir: dir.name, compounds: compoundsOf(read(join(VUE_SRC, dir.name, 'index.ts'))) })
}

// ── report ───────────────────────────────────────────────────────────────────
const failsOnly = process.argv.includes('--fails')
let apiFails = 0
let demoFails = 0
const lines = []

for (const comp of vueComponents.sort((a, b) => a.dir.localeCompare(b.dir))) {
  const issues = []
  const intentional = NO_UPSTREAM.has(comp.dir)

  // API: each vue compound — does HeroUI have that name? do the parts match?
  for (const [name, parts] of Object.entries(comp.compounds)) {
    if (heroCompounds[name]) {
      const hero = heroCompounds[name]
      const missing = hero.filter((p) => !parts.includes(p))
      // `GridRow` is a sanctioned exception — reka-ui's calendar needs explicit
      // grid rows where react-aria iterates them internally.
      const extra = parts.filter((p) => !hero.includes(p) && p !== 'GridRow')
      if (missing.length) issues.push(`  API   '${name}' missing parts: ${missing.join(', ')}`)
      if (extra.length) issues.push(`  API   '${name}' extra/invented parts: ${extra.join(', ')}`)
    } else if (!heroAllNames.has(name) && !intentional) {
      issues.push(`  API   compound '${name}' is not a HeroUI export (renamed or invented)`)
    }
  }
  if (issues.some((l) => l.startsWith('  API'))) apiFails++

  // DEMO: vue demo tags must equal react demo tags (skip if neither demo exists)
  const vueDemo = read(join(VUE_DEMOS, `${comp.dir}.tsx`))
  const reactDemo = read(join(REACT_DEMOS, `${comp.dir}.tsx`))
  if (vueDemo || reactDemo) {
    if (!vueDemo || !reactDemo) {
      issues.push(`  DEMO  missing demo file (vue:${!!vueDemo} react:${!!reactDemo})`)
      demoFails++
    } else {
      const vt = tagsOf(vueDemo)
      const rt = tagsOf(reactDemo)
      // `*.GridRow` is the sanctioned reka-ui calendar exception (see above).
      const onlyVue = [...vt].filter((t) => !rt.has(t) && !t.endsWith('.GridRow'))
      const onlyReact = [...rt].filter((t) => !vt.has(t))
      if (onlyVue.length || onlyReact.length) {
        demoFails++
        if (onlyVue.length) issues.push(`  DEMO  tags only in Vue:   ${onlyVue.join(', ')}`)
        if (onlyReact.length) issues.push(`  DEMO  tags only in React: ${onlyReact.join(', ')}`)
      }
    }
  }

  if (issues.length) {
    lines.push(`${intentional ? 'ℹ' : '✗'} ${comp.dir}${intentional ? '  (no HeroUI v3 equivalent)' : ''}`)
    lines.push(...issues)
  } else if (!failsOnly) {
    lines.push(`✓ ${comp.dir}`)
  }
}

console.log('━━━ heroui-vue parity audit ━━━')
console.log(lines.join('\n'))
console.log(`\n${vueComponents.length} components · ${apiFails} API divergent · ${demoFails} demo divergent`)
