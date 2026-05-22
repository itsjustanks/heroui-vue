import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildInventory,
  componentIdFromDocPath,
  demoFileCandidates,
  exampleSlugFromPreviewName,
  extractComponentPreviews,
  parseDemoRegistry,
  readReactComponentIds
} from './sync-playground-examples.mjs'
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

test('extracts ComponentPreview names from component docs', () => {
  const mdx = `
### Usage
<ComponentPreview name="button-basic" />

### Variants
<ComponentPreview
  name="button-variants"
/>
`

  assert.deepEqual(extractComponentPreviews(mdx), ['button-basic', 'button-variants'])
})

test('derives component ids from grouped MDX component paths', () => {
  assert.equal(
    componentIdFromDocPath('/docs/react/components/(buttons)/button-group.mdx'),
    'button-group'
  )
  assert.equal(
    componentIdFromDocPath('/docs/react/components/(navigation)/breadcrumbs.mdx'),
    'breadcrumbs'
  )
})

test('derives example slugs relative to the owning component id', () => {
  assert.equal(exampleSlugFromPreviewName('button-with-icons', 'button'), 'with-icons')
  assert.equal(exampleSlugFromPreviewName('button-group-full-width', 'button-group'), 'full-width')
  assert.equal(exampleSlugFromPreviewName('breadcrumbs-level-2', 'breadcrumbs'), 'level-2')
})

test('uses nested demos first and flat component demos as component-level fallback', () => {
  assert.deepEqual(demoFileCandidates('button', 'basic'), ['button/examples', 'button/basic', 'button'])
  assert.deepEqual(demoFileCandidates('select', 'default'), ['select/default', 'select'])
  assert.deepEqual(demoFileCandidates('select', 'disabled'), ['select/disabled', 'select'])
  assert.deepEqual(demoFileCandidates('autocomplete', 'default'), ['autocomplete/default', 'combo-box'])
})

test('parses the upstream demo registry file paths', () => {
  const source = `
  "button-basic": {
    component: ButtonDemos.Basic,
    file: "button/basic.tsx",
  },
  "button-group-full-width": {
    component: ButtonGroupDemos.FullWidth,
    file: "button-group/full-width.tsx",
  },
`

  assert.deepEqual(parseDemoRegistry(source), new Map([
    ['button-basic', 'button/basic.tsx'],
    ['button-group-full-width', 'button-group/full-width.tsx']
  ]))
})

test('reads upstream React component directories from package source', () => {
  const root = mkdtempSync(join(tmpdir(), 'heroui-components-'))
  mkdirSync(join(root, 'button'))
  mkdirSync(join(root, 'rac'))
  writeFileSync(join(root, 'button', 'index.ts'), 'export const Button = {}')
  writeFileSync(join(root, 'rac', 'index.ts'), 'export const internal = {}')

  assert.deepEqual(readReactComponentIds(root), ['button'])
})

test('inventory includes upstream source components even without docs examples', () => {
  const root = mkdtempSync(join(tmpdir(), 'heroui-inventory-'))
  const docs = join(root, 'docs')
  const registry = join(root, 'index.ts')
  const components = join(root, 'components')
  mkdirSync(docs, { recursive: true })
  mkdirSync(components, { recursive: true })
  mkdirSync(join(components, 'button'))
  mkdirSync(join(components, 'undocumented'))
  writeFileSync(join(components, 'button', 'index.ts'), '')
  writeFileSync(join(components, 'undocumented', 'index.ts'), '')
  writeFileSync(join(docs, 'button.mdx'), '<ComponentPreview name="button-basic" />')
  writeFileSync(registry, `
    "button-basic": { file: "button/basic.tsx" },
    "button-outline-variant": { file: "button/outline-variant.tsx" },
  `)

  const inventory = buildInventory({
    componentDocsDir: docs,
    demoRegistryPath: registry,
    reactComponentsDir: components
  })

  assert.deepEqual(inventory.components.map((component) => component.id), ['button', 'undocumented'])
  assert.deepEqual(inventory.examples.map((example) => example.id), ['button-basic', 'button-outline-variant'])
  assert.deepEqual(inventory.examples.map((example) => example.slug), ['basic', 'outline-variant'])
  assert.equal(inventory.components.find((component) => component.id === 'undocumented').docPath, '')
})
