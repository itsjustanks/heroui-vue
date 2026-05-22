/**
 * check-variant-props — ensure Vue component props expose upstream style variants.
 *
 * Source of truth: HeroUI styles files under
 * `/Users/ankit/Downloads/heroui-3/packages/styles/src/components/<name>`.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const STYLE_COMPONENTS = '/Users/ankit/Downloads/heroui-3/packages/styles/src/components'
const SRC = join(ROOT, 'src')

const FAMILY_ALIASES = {
  autocomplete: 'combo-box',
  'calendar-year-picker': 'calendar',
  'color-area': 'color-picker',
  'color-field': 'color-picker',
  'color-input-group': 'color-picker',
  'color-slider': 'color-picker',
  'color-swatch': 'color-picker',
  'color-swatch-picker': 'color-picker',
  'disclosure-group': 'disclosure',
  'error-message': 'field',
  'field-error': 'field',
  fieldset: 'form',
  menu: 'dropdown',
  'menu-item': 'dropdown',
  'menu-section': 'dropdown',
  radio: 'radio-group',
  tag: 'tag-group'
}

const IGNORED_VARIANTS = new Set([
  // `isDisabled` is exposed through React compatibility props as both
  // `disabled` and `isDisabled` instead of directly from style variant names.
  'isDisabled'
])

function read (path) {
  return existsSync(path) ? readFileSync(path, 'utf8') : ''
}

function extractBracedObject (source, marker) {
  const markerIndex = source.indexOf(marker)
  if (markerIndex === -1) return ''
  const start = source.indexOf('{', markerIndex)
  if (start === -1) return ''

  let depth = 0
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++
    if (source[i] === '}') depth--
    if (depth === 0) return source.slice(start + 1, i)
  }
  return ''
}

function topLevelObjectKeys (body) {
  const keys = []
  let depth = 0
  let quote = ''
  let token = ''
  let readingKey = true

  for (let i = 0; i < body.length; i++) {
    const ch = body[i]
    const prev = body[i - 1]

    if (quote) {
      token += ch
      if (ch === quote && prev !== '\\') quote = ''
      continue
    }
    if (ch === '"' || ch === "'") {
      quote = ch
      token += ch
      continue
    }
    if (ch === '{' || ch === '[' || ch === '(') {
      depth++
      readingKey = false
      continue
    }
    if (ch === '}' || ch === ']' || ch === ')') {
      depth--
      continue
    }
    if (depth === 0 && ch === ':') {
      const key = token.trim().replace(/^['"]|['"]$/g, '')
      if (key) keys.push(key)
      token = ''
      readingKey = false
      continue
    }
    if (depth === 0 && ch === ',') {
      token = ''
      readingKey = true
      continue
    }
    if (depth === 0 && readingKey) token += ch
  }

  return [...new Set(keys)]
}

function styleVariantKeys (stylePath) {
  return topLevelObjectKeys(extractBracedObject(read(stylePath), 'variants:'))
    .filter((key) => !IGNORED_VARIANTS.has(key))
}

function familySource (family) {
  const dir = join(SRC, family)
  if (!existsSync(dir)) return ''
  return readdirSync(dir)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
    .map((file) => read(join(dir, file)))
    .join('\n')
}

function exposesProp (source, propName) {
  const escaped = propName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(^|[\\s,{])['"]?${escaped}['"]?\\s*:`, 'm').test(source)
}

export async function run () {
  const missing = []
  const styleDirs = readdirSync(STYLE_COMPONENTS)
    .filter((name) => statSync(join(STYLE_COMPONENTS, name)).isDirectory())
    .sort()

  for (const component of styleDirs) {
    const stylePath = join(STYLE_COMPONENTS, component, `${component}.styles.ts`)
    if (!existsSync(stylePath)) continue
    const variantKeys = styleVariantKeys(stylePath)
    if (!variantKeys.length) continue

    const family = FAMILY_ALIASES[component] ?? component
    const source = familySource(family)
    if (!source) continue

    const missingKeys = variantKeys.filter((key) => !exposesProp(source, key))
    if (missingKeys.length) missing.push({ component, family, missingKeys })
  }

  const lines = []
  if (!missing.length) {
    lines.push('every upstream style variant is exposed as a Vue prop')
  } else {
    for (const item of missing) {
      lines.push(`${item.component} -> src/${item.family}: missing ${item.missingKeys.join(', ')}`)
    }
  }

  return {
    title: 'Variant prop parity',
    status: missing.length ? 'fail' : 'ok',
    lines
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await run()
  console.log(`━━━ ${result.title} ━━━`)
  for (const line of result.lines) console.log(line)
  process.exitCode = result.status === 'ok' ? 0 : 1
}
