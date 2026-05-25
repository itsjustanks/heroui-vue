#!/usr/bin/env node
// One-shot: ensure every playground/src/demos/react/**/*.tsx has a `export default`.
// Upstream demos export named (`export function Basic() {...}`); the playground
// loader uses `import.meta.glob<{ default }>(...)` so we add a default alias.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REACT_DIR = path.resolve(__dirname, '..', 'playground/src/demos/react')

function listFiles (dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) out.push(...listFiles(p))
    else if (/\.tsx$/.test(name)) out.push(p)
  }
  return out
}

let patched = 0, alreadyOk = 0
for (const f of listFiles(REACT_DIR)) {
  let s = readFileSync(f, 'utf8')
  if (/export\s+default\b/.test(s)) { alreadyOk++; continue }
  const m = s.match(/export\s+function\s+(\w+)\s*\(/) || s.match(/export\s+const\s+(\w+)\s*=/)
  if (!m) continue
  writeFileSync(f, s + `\nexport default ${m[1]};\n`)
  patched++
}
console.log(`React demos — patched: ${patched}, already had default: ${alreadyOk}`)
