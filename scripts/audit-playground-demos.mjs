#!/usr/bin/env node
// For each example in example-manifest.ts: does a slug-specific Vue+React
// demo file exist, or is it falling through to a flat alias / batched file?
// Output: parity/playground-demo-coverage.json + summary by component.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const PG  = path.join(REPO, 'playground/src')
const VUE = path.join(PG, 'demos/vue')
const REACT = path.join(PG, 'demos/react')

// Crude parse of upstreamComponents + upstreamExamples from the manifest.
const manifestSrc = readFileSync(path.join(PG, 'example-manifest.ts'), 'utf8')

function extractArray (name) {
  const start = manifestSrc.indexOf(`export const ${name}`)
  if (start === -1) return []
  const open = manifestSrc.indexOf('[', start)
  let depth = 0, end = -1
  for (let i = open; i < manifestSrc.length; i++) {
    if (manifestSrc[i] === '[') depth++
    else if (manifestSrc[i] === ']') { depth--; if (depth === 0) { end = i; break } }
  }
  // Strip TS type assertions like `as const` if present.
  const json = manifestSrc.slice(open, end + 1).replace(/\)\s*as\s+const/g, '')
  return JSON.parse(json)
}

const components = extractArray('upstreamComponents')
const examples = extractArray('upstreamExamples')

// Mirror the registry's aliases/sets so we report the same status the UI sees.
const DEMO_COMPONENT_ALIASES = {
  autocomplete: 'combo-box',
  'color-area': 'color-picker', 'color-field': 'color-picker', 'color-slider': 'color-picker',
  'color-swatch': 'color-picker', 'color-swatch-picker': 'color-picker',
  'disclosure-group': 'disclosure',
  'error-message': 'form', 'field-error': 'form', fieldset: 'form',
  menu: 'dropdown',
  radio: 'radio-group',
  tag: 'tag-group',
}
const SLUG_AWARE_FLAT = new Set([
  'button-group','checkbox','chip','combo-box','input','pagination','radio-group',
  'select','slider','surface','switch','tabs','textarea','textfield'
])
const BATCHED = {
  accordion: new Set(['basic','surface','multiple','disabled','custom-indicator','faq','custom-styles','without-separator','custom-render-function','controlled']),
  avatar: new Set(['basic','sizes','colors','variants','fallback','group','custom-styles']),
  badge: new Set(['basic','colors','sizes','variants','placements','with-content','dot']),
  breadcrumbs: new Set(['basic','level-2','level-3','custom-separator','disabled','custom-render-function']),
  button: new Set(['basic','custom-variants','disabled','icon-only','loading','loading-state','sizes','full-width','social','ripple-effect','variants','outline-variant','with-icons','custom-render-function']),
  card: new Set(['default','horizontal','variants','with-avatar','with-form','with-images']),
}
const DEMO_PATH_ALIASES = { 'button-outline-variant': 'button/variants' }

function pathExists (kind, p) {
  const root = kind === 'vue' ? VUE : REACT
  return existsSync(path.join(root, p + '.tsx'))
}

function pairExists (p) {
  return pathExists('vue', p) && pathExists('react', p)
}

function resolve (ex) {
  const candidates = []
  const flat = DEMO_COMPONENT_ALIASES[ex.componentId] ?? ex.componentId
  if (BATCHED[ex.componentId]?.has(ex.slug)) candidates.push({ kind: 'batched', path: `${ex.componentId}/examples` })
  if (DEMO_PATH_ALIASES[ex.id]) candidates.push({ kind: 'alias-id', path: DEMO_PATH_ALIASES[ex.id] })
  candidates.push({ kind: 'slug', path: `${ex.componentId}/${ex.slug}` })
  if (ex.slug === 'basic' || ex.slug === 'default' || SLUG_AWARE_FLAT.has(flat)) {
    candidates.push({ kind: 'flat', path: flat })
  }
  for (const c of candidates) if (pairExists(c.path)) return c
  return null
}

const byComponent = {}
const totals = { total: 0, ported: 0, slugSpecific: 0, flatFallback: 0, batched: 0, idAlias: 0, missing: 0 }
const missingPerComponent = {}

for (const ex of examples) {
  totals.total++
  const r = resolve(ex)
  const entry = (byComponent[ex.componentId] ??= { total: 0, ported: 0, slugSpecific: 0, flatFallback: 0, batched: 0, missing: [] })
  entry.total++
  if (!r) {
    totals.missing++
    entry.missing.push(ex.slug)
    ;(missingPerComponent[ex.componentId] ??= []).push(ex.slug)
    continue
  }
  totals.ported++
  entry.ported++
  if (r.kind === 'slug')     { totals.slugSpecific++; entry.slugSpecific++ }
  if (r.kind === 'flat')     { totals.flatFallback++; entry.flatFallback++ }
  if (r.kind === 'batched')  { totals.batched++;     entry.batched++ }
  if (r.kind === 'alias-id') totals.idAlias++
}

writeFileSync(path.join(REPO, 'parity/playground-demo-coverage.json'),
  JSON.stringify({ totals, byComponent, missingPerComponent }, null, 2) + '\n')

console.log('\nPlayground demo coverage')
console.log('─'.repeat(50))
console.log(`Total examples:        ${totals.total}`)
console.log(`Ported (any source):   ${totals.ported}  (${Math.round(100 * totals.ported / totals.total)}%)`)
console.log(`  slug-specific file:  ${totals.slugSpecific}`)
console.log(`  batched examples:    ${totals.batched}`)
console.log(`  flat-file fallback:  ${totals.flatFallback}`)
console.log(`  id alias:            ${totals.idAlias}`)
console.log(`Missing:               ${totals.missing}`)
console.log('\nMissing by component:')
const sortedMissing = Object.entries(missingPerComponent).sort((a, b) => b[1].length - a[1].length)
for (const [c, slugs] of sortedMissing) {
  console.log(`  ${c.padEnd(22)} ${slugs.length.toString().padStart(3)}  ${slugs.slice(0, 6).join(', ')}${slugs.length > 6 ? ', …' : ''}`)
}
