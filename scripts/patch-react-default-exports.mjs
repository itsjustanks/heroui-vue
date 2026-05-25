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

let patched = 0, alreadyOk = 0, fixedDualExport = 0
for (const f of listFiles(REACT_DIR)) {
  let s = readFileSync(f, 'utf8')

  // Idempotent dual-export collapse: `export function X(){...}` + trailing
  // `export default X;` confuses rolldown's React-refresh scope tracker.
  // Collapse to a single declaration + `export { X as default }`.
  // First normalize any `export { X as default }` we previously wrote back
  // to `export default X;` so the dual-export collapse below can re-apply.
  s = s.replace(/export\s*\{\s*(\w+)\s+as\s+default\s*\}\s*;?/g, 'export default $1;')

  const dualMatch = s.match(/export\s+function\s+(\w+)\s*\(/) || s.match(/^function\s+(\w+)\s*\(/m)
  const hasDefault = /export\s+default\b/.test(s)
  if (dualMatch && hasDefault) {
    const name = dualMatch[1]
    // Collapse `export function X(){}` + `export default X;` into a single
    // `export default function X(){}` declaration. `@vitejs/plugin-react`'s
    // refresh transform + rolldown scope tracker chokes on dual-export
    // (`export { X as default }` ALSO fails; only inline default works).
    const fnRe = new RegExp(`export\\s+function\\s+${name}\\s*\\(`)
    s = s.replace(fnRe, `function ${name}(`)
    s = s.replace(new RegExp(`(^|\\n)export\\s+default\\s+${name}\\s*;?\\s*\\n?`), '$1')
    // Append the inline default export.
    s = s.replace(/\n?$/, `\nexport default ${name};\n`)
    // Plain `export default Name;` is fine when there's no other named
    // export of Name — we just stripped that above. This works because
    // React Fast Refresh now sees a single binding and a single export.
    writeFileSync(f, s)
    fixedDualExport++
    continue
  }

  if (hasDefault) { alreadyOk++; continue }
  const m = s.match(/export\s+function\s+(\w+)\s*\(/) || s.match(/export\s+const\s+(\w+)\s*=/)
  if (!m) continue
  const name = m[1]
  s = s.replace(new RegExp(`export\\s+function\\s+${name}\\s*\\(`), `function ${name}(`)
       .replace(new RegExp(`export\\s+const\\s+${name}\\s*=`), `const ${name} =`)
  writeFileSync(f, s + `\nexport default ${name};\n`)
  patched++
}
console.log(`React demos — patched: ${patched}, fixed dual-export: ${fixedDualExport}, already had default: ${alreadyOk}`)
