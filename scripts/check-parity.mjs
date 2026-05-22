/**
 * check-parity — verify local Vue sources against generated upstream manifests.
 *
 * The manifest extraction scripts capture the upstream public shape. This check
 * proves that the Vue port still emits the same compound parts, data-slot
 * attributes, and BEM classes for each manifest-backed component.
 */
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import {
  ROOT,
  classPresent,
  componentNamesFromArgs,
  parseCompoundParts,
  parseDataSlots,
  parseNamedExports,
  pathExists,
  readDirectorySource,
  readJson,
  readText,
  relativePath
} from './parity-utils.mjs'

const CHECK_PROPS = process.argv.includes('--props')
const PROP_ALIASES = {
  className: ['className', 'class'],
  isDisabled: ['isDisabled', 'disabled'],
  isOpen: ['isOpen', 'open', 'modelValue'],
  defaultOpen: ['defaultOpen', 'defaultValue'],
  onOpenChange: ['onOpenChange', 'onUpdate:open', 'onUpdate:modelValue'],
  onPress: ['onPress', 'onClick']
}

function loadManifests ({ kind, components }) {
  const kinds = kind === 'all' ? ['oss', 'pro'] : [kind]
  const manifests = []

  for (const currentKind of kinds) {
    const dir = join(ROOT, 'parity', currentKind)
    if (!pathExists(dir)) continue

    const files = readdirSync(dir)
      .filter((file) => file.endsWith('.json'))
      .filter((file) => !components.length || components.includes(file.replace(/\.json$/, '')))
      .sort()

    for (const file of files) manifests.push(readJson(join(dir, file)))
  }

  return manifests
}

function checkManifest (manifest) {
  const localDir = manifest.kind === 'pro'
    ? join(ROOT, 'pro/src', manifest.component)
    : join(ROOT, 'src', manifest.component)
  const localIndex = join(localDir, 'index.ts')
  const source = readDirectorySource(localDir)
  const indexText = pathExists(localIndex) ? readText(localIndex) : ''

  const local = {
    exists: pathExists(localDir),
    exports: parseNamedExports(indexText),
    compoundParts: parseCompoundParts(indexText),
    dataSlots: parseDataSlots(source),
    props: parseLocalPropNames(source),
    source
  }

  const missingExports = difference(manifest.upstream.exports, local.exports)
  const missingCompoundParts = difference(manifest.upstream.compoundParts, local.compoundParts)
  const missingDataSlots = difference(manifest.upstream.dataSlots, local.dataSlots)
  const missingProps = CHECK_PROPS ? missingPropNames(manifest.upstream.propNames, local.props) : []
  const missingStyleClasses = (manifest.upstream.styleClasses ?? [])
    .filter((className) => !styleClassPresent(source, manifest.upstream.styleSlots, className))

  return {
    manifest,
    localDir,
    local,
    missingExports,
    missingCompoundParts,
    missingDataSlots,
    missingProps,
    missingStyleClasses,
    ok: local.exists
      && missingExports.length === 0
      && missingCompoundParts.length === 0
      && missingDataSlots.length === 0
      && missingProps.length === 0
      && missingStyleClasses.length === 0
  }
}

export async function run () {
  const args = process.argv.slice(2)
  const kind = args.includes('--pro') ? 'pro' : args.includes('--oss') ? 'oss' : 'all'
  const components = componentNamesFromArgs([])
  const manifests = loadManifests({ kind, components })

  if (!manifests.length) {
    return {
      title: 'Parity manifests',
      status: 'warn',
      lines: ['no matching manifests found — run extract-oss-manifest and/or extract-pro-manifest first']
    }
  }

  const results = manifests.map(checkManifest)
  const failed = results.filter((result) => !result.ok)
  const lines = []

  lines.push(`manifests checked: ${results.length}`)
  lines.push('')

  for (const result of results) {
    const label = `${result.manifest.kind}/${result.manifest.component}`
    if (result.ok) {
      lines.push(`OK   ${label}`)
      continue
    }

    lines.push(`FAIL ${label}`)
    if (!result.local.exists) lines.push(`  missing local source: ${relativePath(result.localDir)}`)
    appendMissing(lines, 'exports', result.missingExports)
    appendMissing(lines, 'compound parts', result.missingCompoundParts)
    appendMissing(lines, 'props', result.missingProps)
    appendMissing(lines, 'data-slot values', result.missingDataSlots)
    appendMissing(lines, 'style classes', result.missingStyleClasses)
  }

  return {
    title: 'Source parity',
    status: failed.length ? 'warn' : 'ok',
    lines
  }
}

function appendMissing (lines, label, values) {
  if (!values.length) return
  lines.push(`  missing ${label}:`)
  for (const value of values) lines.push(`    - ${value}`)
}

function difference (expected = [], actual = []) {
  const actualSet = new Set(actual)
  return expected.filter((value) => !actualSet.has(value)).sort()
}

function missingPropNames (expected = [], actual = []) {
  const actualSet = new Set(actual)
  return expected
    .filter((prop) => prop !== 'children')
    .filter((prop) => !(PROP_ALIASES[prop] ?? [prop]).some((alias) => actualSet.has(alias)))
    .sort()
}

function parseLocalPropNames (source) {
  const props = new Set()
  for (const match of source.matchAll(/^\s*([A-Za-z_$][\w$]*)\s*:/gm)) {
    props.add(match[1])
  }
  return [...props].sort()
}

function styleClassPresent (source, styleSlots = {}, className) {
  if (classPresent(source, className)) return true

  const slotNames = Object.entries(styleSlots)
    .filter(([, value]) => value.split(/\s+/).includes(className))
    .map(([slot]) => slot)

  return slotNames.some((slotName) => {
    const escaped = slotName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return new RegExp(`\\b${escaped}\\s*\\(`).test(source)
      || new RegExp(`\\.${escaped}\\b`).test(source)
      || new RegExp(`\\?\\.${escaped}\\b`).test(source)
  })
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await run()
  console.log(`━━━ ${result.title} ━━━`)
  for (const line of result.lines) console.log(line)
  if (result.status !== 'ok') process.exitCode = 1
}
