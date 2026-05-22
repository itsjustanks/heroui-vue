/**
 * check-coverage — which HeroUI components are not yet ported?
 *
 * Compares HeroUI's component set (the per-component directories under
 * `@heroui/styles/dist/components/`) to this repo's `src/` families and reports
 * both gaps: HeroUI components with no heroui-vue family, and heroui-vue
 * families with no HeroUI counterpart.
 *
 * Several HeroUI components intentionally fold into one heroui-vue family
 * (e.g. the `color-*` set into `color-picker`); the ALIASES map records those
 * so they are not flagged as missing.
 *
 * Plain Node ESM, no dependencies. Run directly (`node scripts/check-coverage.mjs`)
 * or via `npm run maintain`.
 */
import { readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

/** HeroUI `@heroui/styles` component directory -> heroui-vue `src/` family. */
const ALIASES = {
  autocomplete: 'combo-box',
  'disclosure-group': 'accordion',
  menu: 'dropdown',
  'menu-item': 'dropdown',
  'menu-section': 'dropdown',
  'list-box-item': 'list-box',
  'list-box-section': 'list-box',
  radio: 'radio-group',
  tag: 'chip',
  'calendar-year-picker': 'calendar',
  'color-area': 'color-picker',
  'color-field': 'color-picker',
  'color-slider': 'color-picker',
  'color-swatch': 'color-picker',
  'color-swatch-picker': 'color-picker',
  'color-input-group': 'color-picker',
  'error-message': 'field',
  'field-error': 'field',
  fieldset: 'form'
}

/** `src/` entries that are not component families. */
const NON_FAMILY = new Set(['icons', 'lib', 'composables'])

/** Per-component directories shipped by `@heroui/styles`. */
function herouiComponents () {
  const dir = join(ROOT, 'node_modules/@heroui/styles/dist/components')
  return readdirSync(dir).filter((name) => statSync(join(dir, name)).isDirectory())
}

/** Component families under `src/`. */
function repoFamilies () {
  const dir = join(ROOT, 'src')
  return readdirSync(dir)
    .filter((name) => !NON_FAMILY.has(name) && statSync(join(dir, name)).isDirectory())
}

export async function run () {
  const heroui = herouiComponents()
  const families = new Set(repoFamilies())

  const ported = []
  const notPorted = []
  for (const comp of heroui) {
    const family = ALIASES[comp] ?? comp
    if (families.has(family)) ported.push(comp)
    else notPorted.push(comp)
  }

  // heroui-vue families that no HeroUI component maps onto.
  const covered = new Set(heroui.map((comp) => ALIASES[comp] ?? comp))
  const noUpstream = [...families].filter((f) => !covered.has(f)).sort()

  const lines = []
  lines.push(`HeroUI components: ${heroui.length}    heroui-vue families: ${families.size}`)
  lines.push(`HeroUI components covered by a ported family: ${ported.length}`)
  lines.push('')

  if (notPorted.length) {
    lines.push(`HeroUI components not yet ported (${notPorted.length}):`)
    for (const comp of notPorted.sort()) lines.push(`  - ${comp}`)
  } else {
    lines.push('every HeroUI component maps to a ported family')
  }
  lines.push('')

  if (noUpstream.length) {
    lines.push(`heroui-vue families with no HeroUI counterpart (${noUpstream.length}):`)
    for (const family of noUpstream) lines.push(`  - ${family}`)
  } else {
    lines.push('every family maps to a HeroUI component')
  }

  return {
    title: 'Component coverage',
    status: notPorted.length ? 'warn' : 'ok',
    lines
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await run()
  console.log(`━━━ ${result.title} ━━━`)
  for (const line of result.lines) console.log(line)
}
