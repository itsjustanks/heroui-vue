import type { Component } from 'vue'
import type { ComponentType } from 'react'

/**
 * Demos are discovered from the filesystem: `demos/vue/<id>.tsx` paired with
 * `demos/react/<id>.tsx`. A component shows up only when both demo files exist.
 *
 * Keep these globs lazy. The playground can have dozens of React+Vue demos, and
 * eager loading makes the first page pay for every component instead of just
 * the selected parity preview.
 */
const vueComponents = import.meta.glob<{ default: Component }>('./demos/vue/*.tsx')
const reactComponents = import.meta.glob<{ default: ComponentType }>('./demos/react/*.tsx')
const vueSources = import.meta.glob('./demos/vue/*.tsx', {
  query: '?raw', import: 'default'
}) as Record<string, () => Promise<string>>
const reactSources = import.meta.glob('./demos/react/*.tsx', {
  query: '?raw', import: 'default'
}) as Record<string, () => Promise<string>>

/** Manifest entry for a component, without loading its preview modules yet. */
export interface DemoMeta {
  id: string
  title: string
  category: string
}

/** One component, rendered both ways for side-by-side comparison. */
export interface Demo extends DemoMeta {
  vue: Component
  react: ComponentType
  vueSource: string
  reactSource: string
  note?: string
}

/** Display titles for ids where naive title-casing isn't right. */
const TITLES: Record<string, string> = {
  'input-otp': 'Input OTP',
  kbd: 'Kbd'
}

/** Categories, in sidebar order, each listing component ids in display order. */
const CATEGORIES: Array<{ name: string; ids: string[] }> = [
  {
    name: 'Buttons & actions',
    ids: ['button', 'button-group', 'toggle', 'toggle-group', 'close-button', 'link']
  },
  {
    name: 'Inputs & forms',
    ids: ['input', 'textarea', 'textfield', 'number-field', 'checkbox', 'checkbox-group', 'radio-group',
      'switch', 'switch-group', 'slider', 'select', 'combo-box', 'input-group', 'input-otp', 'tags-input',
      'color-picker', 'label', 'description', 'form', 'field']
  },
  {
    name: 'Date & time',
    ids: ['calendar', 'range-calendar', 'date-field', 'date-picker', 'date-range-picker', 'time-field']
  },
  {
    name: 'Overlays',
    ids: ['modal', 'drawer', 'popover', 'tooltip', 'dropdown', 'alert-dialog']
  },
  {
    name: 'Navigation',
    ids: ['breadcrumb', 'tabs', 'pagination', 'toolbar']
  },
  {
    name: 'Data display',
    ids: ['avatar', 'badge', 'card', 'surface', 'header', 'chip', 'accordion', 'collapsible', 'table', 'list-box',
      'kbd', 'separator', 'scroll-area', 'typography', 'item']
  },
  {
    name: 'Feedback',
    ids: ['alert', 'empty-state', 'progress', 'progress-circle', 'meter', 'spinner', 'skeleton', 'sonner', 'shimmer']
  }
]

function titleOf (id: string): string {
  return TITLES[id] ?? id.replace(/(^|-)([a-z])/g, (_, sep: string, ch: string) =>
    (sep ? ' ' : '') + ch.toUpperCase())
}

export const demos: DemoMeta[] = []
export const categories: string[] = []

const demoLoaders: Record<string, {
  vue: () => Promise<{ default: Component }>
  react: () => Promise<{ default: ComponentType }>
  vueSource: () => Promise<string>
  reactSource: () => Promise<string>
}> = {}

for (const cat of CATEGORIES) {
  let added = false
  for (const id of cat.ids) {
    const vue = vueComponents[`./demos/vue/${id}.tsx`]
    const react = reactComponents[`./demos/react/${id}.tsx`]
    const vueSource = vueSources[`./demos/vue/${id}.tsx`]
    const reactSource = reactSources[`./demos/react/${id}.tsx`]
    if (!vue || !react || !vueSource || !reactSource) continue

    demos.push({
      id,
      title: titleOf(id),
      category: cat.name
    })
    demoLoaders[id] = { vue, react, vueSource, reactSource }
    added = true
  }
  if (added) categories.push(cat.name)
}

const cache = new Map<string, Promise<Demo>>()

export function loadDemo (id: string): Promise<Demo> {
  const meta = demos.find((demo) => demo.id === id) ?? demos[0]
  if (!meta) return Promise.reject(new Error('No demos found'))
  if (cache.has(meta.id)) return cache.get(meta.id)!

  const loaders = demoLoaders[meta.id]
  if (!loaders) return Promise.reject(new Error(`Demo not found: ${meta.id}`))

  const promise = Promise.all([
    loaders.vue(),
    loaders.react(),
    loaders.vueSource(),
    loaders.reactSource()
  ]).then(([vue, react, vueSource, reactSource]) => ({
    ...meta,
    vue: vue.default,
    react: react.default,
    vueSource: vueSource.trim(),
    reactSource: reactSource.trim()
  }))

  cache.set(meta.id, promise)
  return promise
}
