import type { Component } from 'vue'
import type { ComponentType } from 'react'
import {
  upstreamComponents,
  upstreamExamples,
  type ComponentMeta as UpstreamComponentMeta,
  type ExampleMeta as UpstreamExampleMeta
} from './example-manifest'

/**
 * Demos are discovered from the filesystem:
 * `demos/vue/<component>/<example>.tsx` paired with
 * `demos/react/<component>/<example>.tsx`. The generated upstream manifest
 * lists every docs example; the filesystem decides which ones are ported.
 *
 * Keep these globs lazy. The playground can have dozens of React+Vue demos, and
 * eager loading makes the first page pay for every component instead of just
 * the selected parity preview.
 */
const vueComponents = import.meta.glob<{ default: Component }>('./demos/vue/**/*.tsx')
const reactComponents = import.meta.glob<{ default: ComponentType }>('./demos/react/**/*.tsx')
const vueSources = import.meta.glob('./demos/vue/**/*.tsx', {
  query: '?raw', import: 'default'
}) as Record<string, () => Promise<string>>
const reactSources = import.meta.glob('./demos/react/**/*.tsx', {
  query: '?raw', import: 'default'
}) as Record<string, () => Promise<string>>

/** Manifest entry for a docs example, without loading its preview modules yet. */
export interface ExampleMeta extends UpstreamExampleMeta {
  ported: boolean
}

export interface ComponentGroup extends UpstreamComponentMeta {
  examples: ExampleMeta[]
}

export interface DemoMeta extends ExampleMeta {}

/** One docs example, rendered both ways for side-by-side comparison. */
export interface Demo extends ExampleMeta {
  vue: Component
  react: ComponentType
  vueSource: string
  reactSource: string
  note?: string
}

const DEMO_PATH_ALIASES: Record<string, string> = {
  'button-outline-variant': 'button/variants'
}
const BATCHED_EXAMPLE_COMPONENTS = new Set([
  'accordion',
  'avatar',
  'badge',
  'breadcrumbs',
  'button',
  'card'
])
const BATCHED_EXAMPLE_SLUGS: Record<string, Set<string>> = {
  accordion: new Set(['basic', 'surface', 'multiple', 'disabled', 'custom-indicator', 'faq', 'custom-styles', 'without-separator', 'custom-render-function', 'controlled']),
  avatar: new Set(['basic', 'sizes', 'colors', 'variants', 'fallback', 'group', 'custom-styles']),
  badge: new Set(['basic', 'colors', 'sizes', 'variants', 'placements', 'with-content', 'dot']),
  breadcrumbs: new Set(['basic', 'level-2', 'level-3', 'custom-separator', 'disabled', 'custom-render-function']),
  button: new Set(['basic', 'custom-variants', 'disabled', 'icon-only', 'loading', 'loading-state', 'sizes', 'full-width', 'social', 'ripple-effect', 'variants', 'outline-variant', 'with-icons', 'custom-render-function']),
  card: new Set(['default', 'horizontal', 'variants', 'with-avatar', 'with-form', 'with-images'])
}
const SLUG_AWARE_FLAT_COMPONENTS = new Set([
  'button-group',
  'checkbox',
  'chip',
  'combo-box',
  'input',
  'pagination',
  'radio-group',
  'select',
  'slider',
  'switch',
  'tabs',
  'textarea',
  'textfield'
])
const DEMO_COMPONENT_ALIASES: Record<string, string> = {
  autocomplete: 'combo-box',
  'color-area': 'color-picker',
  'color-field': 'color-picker',
  'color-slider': 'color-picker',
  'color-swatch': 'color-picker',
  'color-swatch-picker': 'color-picker',
  'disclosure-group': 'disclosure',
  'error-message': 'form',
  'field-error': 'form',
  fieldset: 'form',
  menu: 'dropdown',
  radio: 'radio-group',
  tag: 'tag-group'
}

function demoPathCandidates (meta: UpstreamExampleMeta): string[] {
  const flatComponentId = DEMO_COMPONENT_ALIASES[meta.componentId] ?? meta.componentId
  const candidates: string[] = []
  if (BATCHED_EXAMPLE_COMPONENTS.has(meta.componentId) && BATCHED_EXAMPLE_SLUGS[meta.componentId]?.has(meta.slug)) {
    candidates.push(`${meta.componentId}/examples`)
  }
  if (DEMO_PATH_ALIASES[meta.id]) candidates.push(DEMO_PATH_ALIASES[meta.id])
  candidates.push(`${meta.componentId}/${meta.slug}`)
  if (meta.slug === 'basic' || meta.slug === 'default' || SLUG_AWARE_FLAT_COMPONENTS.has(flatComponentId)) {
    candidates.push(flatComponentId)
  }
  return candidates
}

function resolveDemoPath (meta: UpstreamExampleMeta): string | undefined {
  return demoPathCandidates(meta).find((path) =>
    !!vueComponents[`./demos/vue/${path}.tsx`] &&
    !!reactComponents[`./demos/react/${path}.tsx`] &&
    !!vueSources[`./demos/vue/${path}.tsx`] &&
    !!reactSources[`./demos/react/${path}.tsx`]
  )
}

function hasLoaders (meta: UpstreamExampleMeta): boolean {
  return !!resolveDemoPath(meta)
}

export const demos: DemoMeta[] = upstreamExamples.map((example) => ({
  ...example,
  ported: hasLoaders(example)
}))
export const portedDemos: DemoMeta[] = demos.filter((demo) => demo.ported)
export const categories: string[] = [...new Set(upstreamComponents.map((component) => component.category))]
export const componentGroups: ComponentGroup[] = upstreamComponents.map((component) => {
  const examples = demos.filter((demo) => demo.componentId === component.id)
  return {
    ...component,
    portedCount: examples.filter((example) => example.ported).length,
    examples
  }
})

const demoLoaders: Record<string, {
  vue: () => Promise<{ default: Component }>
  react: () => Promise<{ default: ComponentType }>
  vueSource: () => Promise<string>
  reactSource: () => Promise<string>
}> = {}

for (const demo of portedDemos) {
  const path = resolveDemoPath(demo)
  if (!path) continue
  const vue = vueComponents[`./demos/vue/${path}.tsx`]
  const react = reactComponents[`./demos/react/${path}.tsx`]
  const vueSource = vueSources[`./demos/vue/${path}.tsx`]
  const reactSource = reactSources[`./demos/react/${path}.tsx`]
  if (vue && react && vueSource && reactSource) {
    demoLoaders[demo.id] = { vue, react, vueSource, reactSource }
  }
}

const cache = new Map<string, Promise<Demo>>()

export function loadDemo (id: string): Promise<Demo> {
  const meta = demos.find((demo) => demo.id === id) ?? portedDemos[0]
  if (!meta) return Promise.reject(new Error('No demos found'))
  if (cache.has(meta.id)) return cache.get(meta.id)!

  const loaders = demoLoaders[meta.id]
  if (!loaders) return Promise.reject(new Error(`Example not ported yet: ${meta.id}`))

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
