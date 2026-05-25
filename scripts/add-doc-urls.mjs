#!/usr/bin/env node
// Scans src/<component>/index.ts files and ensures each has a JSDoc `@see`
// pointing at the canonical HeroUI docs URL for the matching slug. Idempotent.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const SRC = path.join(REPO, 'src')

// Folders that map 1:1 to canonical doc slugs. Anything else (utility,
// shadcn carryover, compound host) is skipped — these don't get @see URLs.
const SLUG_MAP = {
  accordion: 'accordion',
  alert: 'alert',
  'alert-dialog': 'alert-dialog',
  autocomplete: 'autocomplete',
  avatar: 'avatar',
  badge: 'badge',
  breadcrumbs: 'breadcrumbs',
  button: 'button',
  'button-group': 'button-group',
  calendar: 'calendar',
  'calendar-year-picker': 'calendar',
  card: 'card',
  checkbox: 'checkbox',
  'checkbox-group': 'checkbox-group',
  chip: 'chip',
  'close-button': 'close-button',
  'color-area': 'color-area',
  'color-field': 'color-field',
  'color-input-group': 'color-input-group',
  'color-picker': 'color-picker',
  'color-slider': 'color-slider',
  'color-swatch': 'color-swatch',
  'color-swatch-picker': 'color-swatch-picker',
  'combo-box': 'combo-box',
  'date-field': 'date-field',
  'date-input-group': 'date-input-group',
  'date-picker': 'date-picker',
  'date-range-picker': 'date-range-picker',
  description: 'description',
  disclosure: 'disclosure',
  'disclosure-group': 'disclosure-group',
  drawer: 'drawer',
  dropdown: 'dropdown',
  'error-message': 'error-message',
  field: 'field',
  'field-error': 'field-error',
  fieldset: 'fieldset',
  form: 'form',
  input: 'input',
  'input-group': 'input-group',
  'input-otp': 'input-otp',
  kbd: 'kbd',
  label: 'label',
  link: 'link',
  'list-box': 'list-box',
  'list-box-item': 'list-box',
  'list-box-section': 'list-box',
  menu: 'dropdown',
  'menu-item': 'dropdown',
  'menu-section': 'dropdown',
  meter: 'meter',
  modal: 'modal',
  'number-field': 'number-field',
  pagination: 'pagination',
  popover: 'popover',
  'progress-bar': 'progress-bar',
  'progress-circle': 'progress-circle',
  radio: 'radio-group',
  'radio-group': 'radio-group',
  'range-calendar': 'range-calendar',
  'scroll-shadow': 'scroll-shadow',
  'search-field': 'search-field',
  select: 'select',
  separator: 'separator',
  skeleton: 'skeleton',
  slider: 'slider',
  spinner: 'spinner',
  surface: 'surface',
  switch: 'switch',
  table: 'table',
  tabs: 'tabs',
  'tag-group': 'tag-group',
  textarea: 'text-area',
  textfield: 'text-field',
  'time-field': 'time-field',
  toast: 'toast',
  'toggle-button': 'toggle-button',
  'toggle-button-group': 'toggle-button-group',
  toolbar: 'toolbar',
  tooltip: 'tooltip',
  typography: 'typography'
}

let changed = 0
let skipped = 0
let alreadyHad = 0

for (const folder of readdirSync(SRC).sort()) {
  const dir = path.join(SRC, folder)
  let info
  try { info = statSync(dir) } catch { continue }
  if (!info.isDirectory()) continue
  const slug = SLUG_MAP[folder]
  if (!slug) { skipped++; continue }
  const idx = path.join(dir, 'index.ts')
  let src
  try { src = readFileSync(idx, 'utf8') } catch { skipped++; continue }
  const url = `https://www.heroui.com/docs/react/components/${slug}`
  if (src.includes(url)) { alreadyHad++; continue }

  // Find first `/**` block; insert `@see URL` before its closing `*/`.
  const blockMatch = src.match(/\/\*\*([\s\S]*?)\*\//)
  if (blockMatch) {
    const block = blockMatch[0]
    // Skip if block already has any heroui docs link
    if (/@see\s+https:\/\/www\.heroui\.com\/docs\/react\/components\//.test(block)) { alreadyHad++; continue }
    const insertion = ` *\n * @see ${url}\n `
    const newBlock = block.replace(/\s*\*\/\s*$/, `\n${insertion}*/`)
    const next = src.replace(block, newBlock)
    writeFileSync(idx, next)
    changed++
  } else {
    // Prepend a fresh JSDoc block.
    const block = `/**\n * @see ${url}\n */\n`
    writeFileSync(idx, block + src)
    changed++
  }
}

console.log(`Doc URLs — changed: ${changed}, already had: ${alreadyHad}, skipped: ${skipped}`)
