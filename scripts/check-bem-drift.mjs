/**
 * check-bem-drift — does every family still emit HeroUI's BEM class names?
 *
 * heroui-vue's components are styled by `@heroui/styles` only because they
 * render HeroUI's exact BEM class names. If a class is renamed upstream — or a
 * refactor here drops one — the component silently loses its styling. This
 * guards against that.
 *
 * For each family it reads the BEM classes from HeroUI's
 * `<component>.styles.js` slot/variant map and verifies each one still appears
 * in the family's source (`src/<family>/*.tsx` and the `*.ts` variant files
 * those components compose). Anything missing is flagged as drift.
 *
 * Plain Node ESM, no dependencies. Run directly (`node scripts/check-bem-drift.mjs`)
 * or via `npm run maintain`.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const COMPONENTS = join(ROOT, 'node_modules/@heroui/styles/dist/components')

/** `src/` entries that are not component families. */
const NON_FAMILY = new Set(['icons', 'lib', 'composables'])

/**
 * heroui-vue family -> the HeroUI `@heroui/styles` component whose BEM slot
 * map it emits. Defaults to the same name; only renames are listed here.
 */
const FAMILY_STYLES = {
  breadcrumb: 'breadcrumbs',
  toggle: 'toggle-button',
  'toggle-group': 'toggle-button-group',
  progress: 'progress-bar',
  collapsible: 'disclosure',
  menubar: 'menu',
  'tags-input': 'tag-group'
}

/**
 * Families with no comparable HeroUI BEM slot map — skipped by the drift check.
 * `sonner` wraps the `vue-sonner` package and renders its markup, rather than
 * emitting HeroUI's `toast` BEM classes.
 */
const NO_BEM_MAP = new Set(['sonner'])

/**
 * Extract the BEM class names from a HeroUI `*.styles.js` file. The classes are
 * the string *values* in the `tv()` `base` / `slots` / `variants` maps; object
 * keys and the `defaultVariants` map (whose values are variant keys, not
 * classes) are excluded.
 */
function extractClasses (jsText) {
  const body = jsText
    .split('\n')
    .filter((line) => !/^\s*(import|export)\s/.test(line))
    .join('\n')
    .replace(/defaultVariants:\s*\{[^}]*\}/gs, '')

  const classes = new Set()
  for (const match of body.matchAll(/:\s*["']([^"']*)["']/g)) {
    for (const token of match[1].split(/\s+/)) {
      if (token) classes.add(token)
    }
  }
  return [...classes]
}

/** Concatenated source of every `.tsx` / `.ts` file under `src/<family>/`. */
function familySource (family) {
  let text = ''
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) walk(path)
      else if (/\.(tsx|ts)$/.test(entry.name)) text += readFileSync(path, 'utf8') + '\n'
    }
  }
  walk(join(ROOT, 'src', family))
  return text
}

/**
 * Whether `cls` is referenced in the family source — either as a whole class
 * token (quote/whitespace/backtick bounded), or via a `<stem>${…}` template
 * literal that builds the class dynamically. heroui-vue commonly composes
 * modifiers as `` `button--${variant}` ``, so finding the `button--` stem
 * counts every `button--*` modifier as covered.
 */
function classPresent (source, cls) {
  const escaped = cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  if (new RegExp(`["'\\s\`]${escaped}["'\\s\`]`).test(source)) return true

  const separator = cls.includes('--') ? '--' : cls.includes('__') ? '__' : null
  if (separator) {
    const stem = cls.slice(0, cls.indexOf(separator) + separator.length)
    if (source.includes(stem + '$')) return true
  }
  return false
}

export async function run () {
  const families = readdirSync(join(ROOT, 'src'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !NON_FAMILY.has(entry.name))
    .map((entry) => entry.name)
    .sort()

  const skipped = []
  const drifted = []
  let checked = 0
  let driftCount = 0

  for (const family of families) {
    if (NO_BEM_MAP.has(family)) {
      skipped.push(family)
      continue
    }
    const styleName = FAMILY_STYLES[family] ?? family
    const stylesFile = join(COMPONENTS, styleName, `${styleName}.styles.js`)
    if (!existsSync(stylesFile)) {
      skipped.push(family)
      continue
    }
    checked++
    const classes = extractClasses(readFileSync(stylesFile, 'utf8'))
    const source = familySource(family)
    const missing = classes.filter((cls) => !classPresent(source, cls))
    if (missing.length) {
      driftCount += missing.length
      drifted.push({ family, styleName, missing: missing.sort() })
    }
  }

  const lines = []
  lines.push(`families checked: ${checked}    skipped (no HeroUI styles map): ${skipped.length}`)
  if (skipped.length) lines.push(`skipped: ${skipped.join(', ')}`)
  lines.push('')

  if (driftCount === 0) {
    lines.push('no BEM drift — every HeroUI class is still emitted')
    return { title: 'BEM class drift', status: 'ok', lines }
  }

  lines.push(`BEM drift: ${driftCount} class(es) across ${drifted.length} family(ies)`)
  lines.push('not found in family source — renamed upstream, or dropped here:')
  lines.push('')
  for (const { family, styleName, missing } of drifted) {
    lines.push(`  ${family}  (from ${styleName}.styles.js)`)
    for (const cls of missing) lines.push(`      ${cls}`)
  }
  return { title: 'BEM class drift', status: 'warn', lines }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await run()
  console.log(`━━━ ${result.title} ━━━`)
  for (const line of result.lines) console.log(line)
}
