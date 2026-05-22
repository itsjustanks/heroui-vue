import type { Component } from 'vue'
import type { ComponentType } from 'react'

/**
 * Demos are discovered from the filesystem: every `demos/<id>.vue` paired with
 * `demos/<id>.tsx`. The compiled components drive the live preview; the raw
 * source (`?raw`) drives the copyable code panels. A component shows up only
 * when both files exist, so half-written demos never break the playground.
 */
const vueComponents = import.meta.glob<{ default: Component }>('./demos/*.vue', { eager: true })
const reactComponents = import.meta.glob<{ default: ComponentType }>('./demos/*.tsx', { eager: true })
const vueSources = import.meta.glob('./demos/*.vue', {
  eager: true, query: '?raw', import: 'default'
}) as Record<string, string>
const reactSources = import.meta.glob('./demos/*.tsx', {
  eager: true, query: '?raw', import: 'default'
}) as Record<string, string>

/** One component, rendered both ways for side-by-side comparison. */
export interface Demo {
  id: string
  title: string
  category: string
  note?: string
  vue: Component
  react: ComponentType
  vueSource: string
  reactSource: string
}

interface DemoMeta {
  id: string
  title: string
  category: string
  note?: string
}

const SHIM_NOTE =
  'Overlay — the Vue port carries no React-Aria attributes; its enter/exit ' +
  'animation is the data-attribute shim deriving data-entering / data-exiting / ' +
  'data-placement from reka-ui state.'

/** Curated order, titles and grouping. Demo files are matched to these by id. */
const META: DemoMeta[] = [
  // Buttons & actions
  { id: 'button', title: 'Button', category: 'Buttons & actions' },
  { id: 'button-group', title: 'Button Group', category: 'Buttons & actions' },
  { id: 'toggle', title: 'Toggle', category: 'Buttons & actions' },
  { id: 'link', title: 'Link', category: 'Buttons & actions' },
  // Inputs & forms
  { id: 'input', title: 'Input', category: 'Inputs & forms' },
  { id: 'textarea', title: 'Textarea', category: 'Inputs & forms' },
  { id: 'number-field', title: 'Number Field', category: 'Inputs & forms' },
  { id: 'checkbox', title: 'Checkbox', category: 'Inputs & forms' },
  { id: 'radio-group', title: 'Radio Group', category: 'Inputs & forms' },
  { id: 'switch', title: 'Switch', category: 'Inputs & forms' },
  { id: 'slider', title: 'Slider', category: 'Inputs & forms' },
  { id: 'select', title: 'Select', category: 'Inputs & forms' },
  // Data display
  { id: 'avatar', title: 'Avatar', category: 'Data display' },
  { id: 'badge', title: 'Badge', category: 'Data display' },
  { id: 'card', title: 'Card', category: 'Data display' },
  { id: 'chip', title: 'Chip', category: 'Data display' },
  { id: 'accordion', title: 'Accordion', category: 'Data display' },
  { id: 'table', title: 'Table', category: 'Data display' },
  { id: 'kbd', title: 'Kbd', category: 'Data display' },
  { id: 'separator', title: 'Separator', category: 'Data display' },
  // Navigation
  { id: 'breadcrumb', title: 'Breadcrumb', category: 'Navigation' },
  { id: 'tabs', title: 'Tabs', category: 'Navigation' },
  { id: 'pagination', title: 'Pagination', category: 'Navigation' },
  // Overlays
  { id: 'popover', title: 'Popover', category: 'Overlays', note: SHIM_NOTE },
  { id: 'tooltip', title: 'Tooltip', category: 'Overlays', note: SHIM_NOTE },
  { id: 'modal', title: 'Modal', category: 'Overlays', note: SHIM_NOTE },
  { id: 'drawer', title: 'Drawer', category: 'Overlays', note: SHIM_NOTE },
  { id: 'dropdown', title: 'Dropdown', category: 'Overlays' },
  { id: 'alert-dialog', title: 'Alert Dialog', category: 'Overlays' },
  // Feedback
  { id: 'alert', title: 'Alert', category: 'Feedback' },
  { id: 'progress', title: 'Progress', category: 'Feedback' },
  { id: 'spinner', title: 'Spinner', category: 'Feedback' },
  { id: 'skeleton', title: 'Skeleton', category: 'Feedback' }
]

export const demos: Demo[] = META.flatMap((meta) => {
  const vueMod = vueComponents[`./demos/${meta.id}.vue`]
  const reactMod = reactComponents[`./demos/${meta.id}.tsx`]
  if (!vueMod || !reactMod) return []
  return [{
    id: meta.id,
    title: meta.title,
    category: meta.category,
    note: meta.note,
    vue: vueMod.default,
    react: reactMod.default,
    vueSource: (vueSources[`./demos/${meta.id}.vue`] ?? '').trim(),
    reactSource: (reactSources[`./demos/${meta.id}.tsx`] ?? '').trim()
  }]
})

/** Distinct categories, in first-seen order. */
export const categories: string[] = [...new Set(demos.map((d) => d.category))]
