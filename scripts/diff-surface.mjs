#!/usr/bin/env node
// Reads parity/react-surface.json and src/* index.ts files; emits a per-folder
// diff of compound dot-notation parts, flat exports, and missing folders.
//
// Output: parity/surface-diff.json

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const SURFACE = JSON.parse(readFileSync(path.join(REPO, 'parity/react-surface.json'), 'utf8'))
const SRC = path.join(REPO, 'src')
const OUT = path.join(REPO, 'parity/surface-diff.json')

// Folders in this repo that intentionally bundle multiple canonical surfaces
// under a single dir. Map: canonical-folder-name → repo-folder-that-hosts-it.
// Entries omitted here are expected to have their own src/<name>/index.ts.
const HOST_MAP = {
  'color-area': 'color-picker',
  'color-field': 'color-picker',
  'color-picker': 'color-picker',
  'color-slider': 'color-picker',
  'color-swatch': 'color-picker',
  'color-swatch-picker': 'color-picker',
  'tag': 'tag-group',
  'radio': 'radio',
}

function readRepoIndex(folder) {
  const p = path.join(SRC, folder, 'index.ts')
  if (!existsSync(p)) return null
  return readFileSync(p, 'utf8')
}

function detectExports(src) {
  const exports = new Set()
  // const X = ... or const X: ... =
  const constRe = /export\s+const\s+(\w+)/g
  let m
  while ((m = constRe.exec(src)) !== null) exports.add(m[1])
  // export { A, B as C } [from '...']  — skip `export type { ... }` (handled separately)
  const blockRe = /(?<!type\s)export\s+\{\s*([^}]+?)\s*\}/g
  while ((m = blockRe.exec(src)) !== null) {
    for (const n of m[1].split(',')) {
      let trimmed = n.trim()
      if (trimmed.startsWith('type ')) continue  // inline type re-export
      const name = trimmed.split(/\s+as\s+/).pop()
      if (name) exports.add(name)
    }
  }
  // export default X
  const defRe = /export\s+default\s+(\w+)/g
  while ((m = defRe.exec(src)) !== null) exports.add(m[1])
  // export function X
  const fnRe = /export\s+function\s+(\w+)/g
  while ((m = fnRe.exec(src)) !== null) exports.add(m[1])
  // export class X
  const clsRe = /export\s+class\s+(\w+)/g
  while ((m = clsRe.exec(src)) !== null) exports.add(m[1])
  return exports
}

function detectCompound(src, compoundName) {
  // Look for: const Foo = Object.assign(SomeRoot, { Part: X, Part2: Y })
  const re = new RegExp(`const\\s+${compoundName}\\s*=\\s*Object\\.assign\\([^,]+,\\s*\\{([\\s\\S]*?)\\}\\s*\\)`, 'm')
  const m = src.match(re)
  if (!m) return null
  const parts = []
  // Each line may be `Name: value,` (long form) or `Name,` (shorthand) or `Name` (final, no comma)
  const partRe = /^\s+(\w+)\s*[:,]?\s*$|^\s+(\w+)\s*:/gm
  let pm
  while ((pm = partRe.exec(m[1])) !== null) {
    const name = pm[1] || pm[2]
    if (name) parts.push(name)
  }
  return parts
}

const diff = {}

for (const [folder, info] of Object.entries(SURFACE)) {
  const repoFolder = HOST_MAP[folder] || folder
  const src = readRepoIndex(repoFolder)
  const entry = {
    upstream_folder: folder,
    repo_folder: repoFolder,
    hosted_in: HOST_MAP[folder] || null,
    missing_folder: !src,
    upstream: {
      compound: info.compound,
      flatExports: info.flatExports,
    },
    repo: {
      compound_parts: null,
      exports: src ? Array.from(detectExports(src)) : [],
    },
    issues: [],
  }

  if (!src) {
    entry.issues.push(`No src/${repoFolder}/index.ts found`)
    diff[folder] = entry
    continue
  }

  // Check compound presence + parts
  if (info.compound) {
    const repoParts = detectCompound(src, info.compound.name)
    entry.repo.compound_parts = repoParts
    if (!repoParts) {
      entry.issues.push(`Missing compound const ${info.compound.name} = Object.assign(...)`)
    } else {
      const missingParts = info.compound.parts.filter((p) => !repoParts.includes(p))
      if (missingParts.length) {
        entry.issues.push(`Missing compound parts: ${missingParts.join(', ')}`)
      }
    }
  }

  // Check flat exports
  const repoExports = new Set(entry.repo.exports)
  const missingFlat = info.flatExports.filter((e) => !repoExports.has(e))
  if (missingFlat.length) {
    entry.issues.push(`Missing flat exports: ${missingFlat.join(', ')}`)
  }

  if (entry.issues.length === 0) entry.ok = true

  diff[folder] = entry
}

writeFileSync(OUT, JSON.stringify(diff, null, 2) + '\n')

// Summary to stdout
let ok = 0, withIssues = 0, missing = 0
const issuesList = []
for (const [name, entry] of Object.entries(diff)) {
  if (entry.missing_folder) {
    missing++
    issuesList.push(`MISSING ${name}: ${entry.issues.join(' | ')}`)
  } else if (entry.ok) {
    ok++
  } else {
    withIssues++
    issuesList.push(`${name}: ${entry.issues.join(' | ')}`)
  }
}
console.log(`\nSummary: ${ok} ok, ${withIssues} with issues, ${missing} missing folders`)
console.log(`\nIssues:\n${issuesList.join('\n')}`)
