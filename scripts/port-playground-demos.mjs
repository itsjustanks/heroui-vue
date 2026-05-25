#!/usr/bin/env node
// Bulk-port upstream HeroUI React demos into the playground.
//
// React side: literal file copy + strip the "use client" directive.
// Vue side:   best-effort transform — import path swap, className→class,
//             useState→ref, "function X()"→defineComponent factory. Files
//             that look too complex (custom hooks, classes, generics) get
//             replaced with a Vue stub that re-exports the existing flat
//             component demo so the slot stays renderable.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const PG = path.join(REPO, 'playground/src')
const UPSTREAM = '/Users/ankit/Downloads/heroui-3/apps/docs/src/demos'
const REACT_OUT = path.join(PG, 'demos/react')
const VUE_OUT   = path.join(PG, 'demos/vue')

const manifestSrc = readFileSync(path.join(PG, 'example-manifest.ts'), 'utf8')

function extractArray (name) {
  const start = manifestSrc.indexOf(`export const ${name}`)
  const open = manifestSrc.indexOf('[', start)
  let depth = 0, end = -1
  for (let i = open; i < manifestSrc.length; i++) {
    if (manifestSrc[i] === '[') depth++
    else if (manifestSrc[i] === ']') { depth--; if (depth === 0) { end = i; break } }
  }
  return JSON.parse(manifestSrc.slice(open, end + 1))
}

const examples = extractArray('upstreamExamples')

function ensureDir (p) { mkdirSync(path.dirname(p), { recursive: true }) }

/** Conservative: stub every Vue file. The auto-transformer produced too
 *  many broken outputs (JSX whitespace, return-statement bodies, generics),
 *  so we ship clear "pending" stubs and let the React side be the source
 *  of truth until each demo is hand-ported.
 *
 *  Flip this to `false` for components you've authored a real Vue version
 *  for and want the script to leave untouched. */
function tooComplexForAutoPort (_src) {
  return true
}

function transformReact (src) {
  // Strip "use client" — Vite has no use for it.
  let s = src.replace(/^["']use client["'];?\s*\n?/m, '')
  // Playground loader expects a default export. Upstream uses named
  // function exports (`export function Basic() {...}`); add a default
  // alias when missing.
  if (!/export\s+default\b/.test(s)) {
    const m = s.match(/export\s+function\s+(\w+)\s*\(/) || s.match(/export\s+const\s+(\w+)\s*=/)
    if (m) s += `\nexport default ${m[1]};\n`
  }
  return s
}

function transformVue (src) {
  let s = src

  // Strip directives & React-only `useState` import line.
  s = s.replace(/^["']use client["'];?\s*\n?/m, '')

  // Swap import sources.
  s = s.replace(/from\s+["']@heroui\/react["']/g, `from '@itsjustanks/heroui-vue'`)

  // Collect Vue hook injections we may need to add.
  let needsRef = false
  let needsComputed = false

  // Replace useState destructure: `const [foo, setFoo] = useState<T>(init)`
  s = s.replace(/const\s+\[(\w+),\s*set(\w+)\]\s*=\s*useState(?:<[^>]+>)?\s*\(([^)]*)\)\s*;?/g,
    (_, name, /* set */ _set, init) => {
      needsRef = true
      return `const ${name} = ref(${init || 'undefined'})`
    })

  // Replace setFoo(x) calls with foo.value = x.
  s = s.replace(/set(\w+)\(([^)]+)\)\s*;?/g, (_, n, expr) => {
    const lower = n[0].toLowerCase() + n.slice(1)
    return `${lower}.value = ${expr}`
  })

  // Drop the `useState` named import after rewriting usages.
  s = s.replace(/,\s*useState(?=[\s,}])/g, '').replace(/useState\s*,?/g, '')
  s = s.replace(/import\s*\{\s*\}\s*from\s*["']react["'];?\s*\n?/g, '')
  s = s.replace(/import\s*\{\s*Key\s*\}\s*from\s*["']react["'];?\s*\n?/g, '')
  s = s.replace(/import\s+type\s*\{\s*Key\s*\}\s*from\s*["']@itsjustanks\/heroui-vue["'];?\s*\n?/g, '')
  s = s.replace(/import\s+type\s*\{[^}]*\}\s*from\s*["']react["'];?\s*\n?/g, '')

  // Swap React JSX-isms.
  s = s.replace(/\bclassName=/g, 'class=')
  // React event names that have direct Vue equivalents — leave HeroUI's
  // onPress/onSelectionChange/etc alone (they're already framework-neutral
  // through reka). Only convert pure DOM onClick→onClick (Vue uses onClick).
  // (No transformation needed for common HeroUI events.)

  // Replace `export default function Name () { return (<JSX/>) }` with
  // `export default defineComponent(() => () => (<JSX/>))`.
  s = s.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{\s*return\s*\(([\s\S]*?)\);?\s*\}\s*$/m,
    (_, _name, jsx) => `export default defineComponent(() => () => (${jsx}))`)

  // Replace `export function Name() { return (...) }` (no default) — wrap
  // in defineComponent and add a default export.
  s = s.replace(/^export\s+function\s+(\w+)\s*\(\s*\)\s*\{\s*return\s*(\(?[\s\S]*?\)?);?\s*\}\s*$/m,
    (_, _name, jsx) => `export default defineComponent(() => () => (${jsx}))`)

  // Replace `export default function Name() { … hooks … return (...) }` — handle
  // bodies with statements before the return: capture and inline.
  s = s.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{([\s\S]*?)return\s*\(([\s\S]*?)\);?\s*\}\s*$/m,
    (_, _name, body, jsx) => {
      const trimmedBody = body.trim()
      return `export default defineComponent(() => {\n${trimmedBody}\n  return () => (${jsx})\n})`
    })

  // Prepend the Vue import.
  const vueImports = []
  if (needsRef) vueImports.push('ref')
  if (needsComputed) vueImports.push('computed')
  vueImports.push('defineComponent')
  const importStmt = `import { ${vueImports.join(', ')} } from 'vue'\n`

  // If there's already a vue import, merge; otherwise prepend.
  if (/from\s+["']vue["']/.test(s)) {
    s = s.replace(/import\s*\{([^}]+)\}\s*from\s*["']vue["']/, (_, inner) => {
      const have = new Set(inner.split(',').map((x) => x.trim()))
      for (const v of vueImports) have.add(v)
      return `import { ${[...have].join(', ')} } from 'vue'`
    })
  } else {
    s = importStmt + s
  }

  return s
}

let reactCopied = 0
let reactExisted = 0
let reactNoSource = 0
let vueWritten = 0
let vueExisted = 0
let vueStubbed = 0
let vueSkipped = 0

const stubbedSlugs = []

for (const ex of examples) {
  const upstreamFile = path.join(UPSTREAM, ex.componentId, `${ex.slug}.tsx`)
  if (!existsSync(upstreamFile)) {
    // Try alternate naming via upstreamFile field.
    const altPath = ex.upstreamFile && path.join(UPSTREAM, ex.upstreamFile)
    if (altPath && existsSync(altPath)) {
      // OK
    } else {
      reactNoSource++
      continue
    }
  }
  const src = readFileSync(existsSync(upstreamFile) ? upstreamFile : path.join(UPSTREAM, ex.upstreamFile), 'utf8')

  // -- React side --
  const reactOut = path.join(REACT_OUT, ex.componentId, `${ex.slug}.tsx`)
  if (existsSync(reactOut)) {
    reactExisted++
  } else {
    ensureDir(reactOut)
    writeFileSync(reactOut, transformReact(src))
    reactCopied++
  }

  // -- Vue side --
  const vueOut = path.join(VUE_OUT, ex.componentId, `${ex.slug}.tsx`)
  if (existsSync(vueOut)) { vueExisted++; continue }
  ensureDir(vueOut)

  if (tooComplexForAutoPort(src)) {
    // Stub: import the canonical compound and render a "Not yet ported"
    // hint with a link to docs. Keeps the slot renderable.
    const stub = `import { defineComponent } from 'vue'

/** Vue port of \`${ex.componentId}/${ex.slug}\` is not yet authored.
 *  Upstream React source contains constructs (hooks/types/generics) that the
 *  auto-porter can't yet transform. See React side for the upstream example,
 *  or contribute a Vue version at this path.
 *  @see https://www.heroui.com/docs/react/components/${ex.componentId}
 */
export default defineComponent(() => () => (
  <div class="demo-col" style={{ color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}>
    <p>Vue port pending — see the React side for the upstream example.</p>
  </div>
))
`
    writeFileSync(vueOut, stub)
    vueStubbed++
    stubbedSlugs.push(`${ex.componentId}/${ex.slug}`)
  } else {
    writeFileSync(vueOut, transformVue(src))
    vueWritten++
  }
}

console.log(`React demos    — copied: ${reactCopied}, existed: ${reactExisted}, no source: ${reactNoSource}`)
console.log(`Vue demos      — written: ${vueWritten}, stubbed: ${vueStubbed}, existed: ${vueExisted}, skipped: ${vueSkipped}`)
if (stubbedSlugs.length) {
  console.log(`\nStubbed Vue demos (need hand-port):\n  ${stubbedSlugs.slice(0, 25).join('\n  ')}${stubbedSlugs.length > 25 ? `\n  … +${stubbedSlugs.length - 25} more` : ''}`)
}
