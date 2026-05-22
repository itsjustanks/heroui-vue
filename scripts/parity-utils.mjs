import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
export const OSS_REACT_ROOT = process.env.HEROUI_OSS_REACT_ROOT
  ?? '/Users/ankit/Downloads/heroui-3/packages/react'
export const OSS_STYLES_ROOT = process.env.HEROUI_OSS_STYLES_ROOT
  ?? '/Users/ankit/Downloads/heroui-3/packages/styles'
export const PRO_REACT_ROOT = process.env.HEROUI_PRO_REACT_ROOT
  ?? '/Users/ankit/.superset/projects/unfold-next/node_modules/@heroui-pro/react'

export function readText (path) {
  return readFileSync(path, 'utf8')
}

export function readJson (path) {
  return JSON.parse(readText(path))
}

export function pathExists (path) {
  return existsSync(path)
}

export function ensureDir (path) {
  mkdirSync(path, { recursive: true })
}

export function writeJsonFile (path, value) {
  ensureDir(dirname(path))
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`)
}

export function listSourceFiles (dir, extensions = new Set(['.ts', '.tsx', '.js', '.d.ts'])) {
  if (!existsSync(dir)) return []

  const files = []
  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name)
      if (entry.isDirectory()) walk(path)
      else if (extensions.has(extname(entry.name))) files.push(path)
    }
  }
  walk(dir)
  return files.sort()
}

export function readDirectorySource (dir, extensions) {
  return listSourceFiles(dir, extensions)
    .map((path) => `\n/* ${relative(ROOT, path)} */\n${readText(path)}`)
    .join('\n')
}

export function parseDataSlots (text) {
  return unique([
    ...matchAll(text, /data-slot\s*=\s*["'`]([^"'`]+)["'`]/g),
    ...matchAll(text, /["']data-slot["']\s*:\s*["'`]([^"'`]+)["'`]/g),
    ...matchAll(text, /"data-slot"\s*,\s*["'`]([^"'`]+)["'`]/g)
  ]).sort()
}

export function parseCompoundParts (text) {
  const parts = []
  const assignMatch = text.match(/Object\.assign\([^,]+,\s*\{([\s\S]*?)\}\s*\)/)
  if (!assignMatch) return parts

  for (const match of assignMatch[1].matchAll(/([A-Za-z_$][\w$]*)\s*:/g)) {
    parts.push(match[1])
  }
  return unique(parts)
}

export function parseNamedExports (text) {
  const exports = new Set()

  for (const name of matchAll(text, /export\s+(?:declare\s+)?(?:const|function|class)\s+([A-Za-z_$][\w$]*)/g)) {
    exports.add(name)
  }

  for (const block of matchAll(text, /export\s*\{([\s\S]*?)\}/g)) {
    for (const item of block.split(',')) {
      const cleaned = item
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .trim()
      if (!cleaned) continue
      const alias = cleaned.match(/\bas\s+([A-Za-z_$][\w$]*)$/)
      const direct = cleaned.match(/^([A-Za-z_$][\w$]*)/)
      if (alias) exports.add(alias[1])
      else if (direct) exports.add(direct[1])
    }
  }

  return [...exports].sort()
}

export function parsePropTypes (text) {
  return unique([
    ...matchAll(text, /(?:interface|type)\s+([A-Za-z_$][\w$]*Props)\b/g),
    ...matchAll(text, /export\s+(?:declare\s+)?(?:interface|type)\s+([A-Za-z_$][\w$]*Props)\b/g)
  ]).sort()
}

export function parsePropNames (text) {
  const props = new Set()

  for (const block of interfaceBodies(text)) {
    for (const match of block.matchAll(/^\s*([A-Za-z_$][\w$]*)\??\s*:/gm)) {
      props.add(match[1])
    }
  }

  return [...props].sort()
}

export function parseJsxHosts (text) {
  const hosts = []
  const tagPattern = /<([A-Za-z][\w.:-]*)(?=[\s>/])/g
  for (const match of text.matchAll(tagPattern)) {
    const tag = match[1]
    if (tag.startsWith('/')) continue

    const after = text.slice(match.index, Math.min(text.length, match.index + 420))
    const slot = after.match(/data-slot\s*=\s*["'`]([^"'`]+)["'`]/)?.[1]
      ?? after.match(/["']data-slot["']\s*:\s*["'`]([^"'`]+)["'`]/)?.[1]
    hosts.push({ tag, dataSlot: slot ?? null })
  }
  return hosts
}

export function extractStyleSlots (text) {
  const objectText = objectAfterKey(text, 'slots')
  if (!objectText) return { slots: {}, classes: [] }

  const slots = {}
  for (const match of objectText.matchAll(/([A-Za-z_$][\w$]*)\s*:\s*["'`]([^"'`]+)["'`]/g)) {
    slots[match[1]] = match[2]
  }

  return {
    slots,
    classes: unique(Object.values(slots).flatMap((value) => value.split(/\s+/).filter(Boolean))).sort()
  }
}

export function extractCssClasses (text) {
  return unique(matchAll(text, /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g)).sort()
}

export function classPresent (source, className) {
  const escaped = escapeRegExp(className)
  if (new RegExp(`(^|["'\\s\`])${escaped}($|["'\\s\`])`).test(source)) return true

  const separator = className.includes('--') ? '--' : className.includes('__') ? '__' : null
  if (!separator) return false

  const stem = className.slice(0, className.indexOf(separator) + separator.length)
  return source.includes(`${stem}$`)
}

export function componentNamesFromArgs (fallback) {
  const args = process.argv.slice(2)
  const names = []

  for (let index = 0; index < args.length; index++) {
    const arg = args[index]
    if (arg === '--component' || arg === '--components') {
      names.push(...(args[index + 1] ?? '').split(',').map((name) => name.trim()).filter(Boolean))
      index++
    } else if (!arg.startsWith('--')) {
      names.push(...arg.split(',').map((name) => name.trim()).filter(Boolean))
    }
  }

  return names.length ? unique(names) : fallback
}

export function repoFamilies () {
  return readdirSync(join(ROOT, 'src'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => !new Set(['composables', 'icons', 'lib']).has(entry.name))
    .map((entry) => entry.name)
    .sort()
}

export function relativePath (path) {
  return relative(ROOT, path)
}

function objectAfterKey (text, key) {
  const keyMatch = new RegExp(`${key}\\s*:`).exec(text)
  if (!keyMatch) return null

  const start = text.indexOf('{', keyMatch.index)
  if (start === -1) return null

  let depth = 0
  let quote = null
  let escaped = false
  for (let index = start; index < text.length; index++) {
    const char = text[index]

    if (quote) {
      if (escaped) {
        escaped = false
      } else if (char === '\\') {
        escaped = true
      } else if (char === quote) {
        quote = null
      }
      continue
    }

    if (char === '"' || char === '\'' || char === '`') {
      quote = char
      continue
    }
    if (char === '{') depth++
    if (char === '}') depth--
    if (depth === 0) return text.slice(start + 1, index)
  }
  return null
}

function matchAll (text, pattern) {
  return [...text.matchAll(pattern)].map((match) => match[1])
}

function unique (values) {
  return [...new Set(values.filter(Boolean))]
}

function interfaceBodies (text) {
  const bodies = []
  const pattern = /interface\s+[A-Za-z_$][\w$]*Props\b/g
  for (const match of text.matchAll(pattern)) {
    const start = text.indexOf('{', match.index)
    if (start === -1) continue

    let depth = 0
    for (let index = start; index < text.length; index++) {
      const char = text[index]
      if (char === '{') depth++
      if (char === '}') depth--
      if (depth === 0) {
        bodies.push(text.slice(start + 1, index))
        break
      }
    }
  }
  return bodies
}

function escapeRegExp (value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
