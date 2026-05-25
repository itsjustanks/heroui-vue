#!/usr/bin/env node
// Walks node_modules/@heroui/react/dist/components/* and emits a JSON manifest
// of every component's surface area: canonical compound names, dot-notation
// parts, flat root/part exports, prop type aliases, and re-exported variants.
//
// Output: parity/react-surface.json

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const REACT_DIR = path.join(REPO, 'node_modules/@heroui/react/dist/components')
const OUT = path.join(REPO, 'parity/react-surface.json')

function listFolders(dir) {
  return readdirSync(dir).filter((n) => {
    try { return statSync(path.join(dir, n)).isDirectory() } catch { return false }
  })
}

function parseIndex(folder) {
  const indexFile = path.join(REACT_DIR, folder, 'index.d.ts')
  let src
  try { src = readFileSync(indexFile, 'utf8') } catch { return null }

  // Find the canonical compound: `export declare const Name: (...) & { Slot: ... }`
  const result = {
    folder,
    compound: null,          // { name, parts: [] }
    flatExports: [],         // values (const, fn) re-exported by name
    propTypes: [],           // type aliases re-exported
    variants: [],            // e.g. autocompleteVariants
    namedTypes: [],          // e.g. AutocompleteVariants
    hooks: [],               // useFoo
    rootName: null
  }

  // Compound block: capture name + dot-notation part keys
  const compoundMatch = src.match(/export declare const (\w+):[\s\S]*?\)\s*&\s*\{([\s\S]*?)\n\};/m)
  if (compoundMatch) {
    const compoundName = compoundMatch[1]
    const partsBlock = compoundMatch[2]
    // Each part: `    Name: <signature>;` — we just grab the leading identifier
    const partNames = []
    const partRe = /^\s{4,}(\w+):/gm
    let m
    while ((m = partRe.exec(partsBlock)) !== null) {
      partNames.push(m[1])
    }
    result.compound = { name: compoundName, parts: partNames }
  }

  // export { A, B as C, ... } from ...   — collect named flat exports of values
  const exportListRe = /export\s+\{\s*([^}]+?)\s*\}\s*(?:from\s+["'][^"']+["'])?\s*;?/g
  let em
  while ((em = exportListRe.exec(src)) !== null) {
    const names = em[1].split(',').map((s) => s.trim()).filter(Boolean)
    for (const n of names) {
      const [orig, alias] = n.split(/\s+as\s+/).map((s) => s.trim())
      result.flatExports.push(alias || orig)
    }
  }

  // export type { Foo, Bar as Baz } from ...
  const typeExportRe = /export\s+type\s+\{\s*([^}]+?)\s*\}\s*(?:from\s+["'][^"']+["'])?\s*;?/g
  let tm
  while ((tm = typeExportRe.exec(src)) !== null) {
    const names = tm[1].split(',').map((s) => s.trim()).filter(Boolean)
    for (const n of names) {
      const [orig, alias] = n.split(/\s+as\s+/).map((s) => s.trim())
      result.propTypes.push(alias || orig)
    }
  }

  // variants: lowercase names ending in "Variants" exported as values, plus the type
  for (const exp of result.flatExports) {
    if (/Variants$/.test(exp) && exp[0] === exp[0].toLowerCase()) {
      result.variants.push(exp)
    }
    if (/^use[A-Z]/.test(exp)) result.hooks.push(exp)
  }
  for (const t of result.propTypes) {
    if (/Variants$/.test(t) && t[0] === t[0].toUpperCase()) {
      result.namedTypes.push(t)
    }
  }

  // RootName guess: prefer matching `<Folder>Root` style
  const folderPascal = folder.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('')
  if (result.flatExports.includes(`${folderPascal}Root`)) {
    result.rootName = `${folderPascal}Root`
  }

  return result
}

const folders = listFolders(REACT_DIR).filter((f) => f !== 'rac')
const surface = {}
for (const f of folders) {
  const parsed = parseIndex(f)
  if (parsed) surface[f] = parsed
}

writeFileSync(OUT, JSON.stringify(surface, null, 2) + '\n')
console.log(`Wrote ${OUT} — ${Object.keys(surface).length} folders`)
