/**
 * sync-playground-examples — build the playground example inventory from the
 * upstream HeroUI React docs checkout.
 *
 * The generated manifest is intentionally metadata-only. Demo implementations
 * remain in `playground/src/demos/{vue,react}` so the parity playground can
 * compare real Vue and React source side by side.
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const UPSTREAM_DOCS = '/Users/ankit/Downloads/heroui-3/apps/docs'
const COMPONENT_DOCS = join(UPSTREAM_DOCS, 'content/docs/react/components')
const DEMO_REGISTRY = join(UPSTREAM_DOCS, 'src/demos/index.ts')
const REACT_COMPONENTS = '/Users/ankit/Downloads/heroui-3/packages/react/src/components'
const OUT_FILE = join(ROOT, 'playground/src/example-manifest.ts')
const VUE_DEMOS = join(ROOT, 'playground/src/demos/vue')
const REACT_DEMOS = join(ROOT, 'playground/src/demos/react')
const INTERNAL_COMPONENT_DIRS = new Set([
  'rac',
  // Present in @heroui/react source, but not standalone component docs pages in
  // llms-components.txt. They are support parts of documented families.
  'calendar-year-picker',
  'color-input-group',
  'date-input-group',
  'empty-state',
  'header',
  'list-box-item',
  'list-box-section',
  'menu',
  'menu-item',
  'menu-section',
  'radio',
  'switch-group',
  'tag'
])
const BATCHED_EXAMPLE_COMPONENTS = new Set([
  'accordion',
  'avatar',
  'badge',
  'breadcrumbs',
  'button',
  'card'
])
const BATCHED_EXAMPLE_SLUGS = {
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
  'surface',
  'switch',
  'tabs',
  'textarea',
  'textfield'
])
const DOC_COMPONENT_ALIASES = {
  'text-area': 'textarea',
  'text-field': 'textfield'
}
const DEMO_COMPONENT_ALIASES = {
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

function walkFiles (dir, predicate, acc = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walkFiles(path, predicate, acc)
    else if (predicate(path)) acc.push(path)
  }
  return acc
}

export function extractComponentPreviews (mdx) {
  const names = []
  const re = /<ComponentPreview\b[\s\S]*?\bname\s*=\s*["']([^"']+)["'][\s\S]*?\/>/g
  let match
  while ((match = re.exec(mdx))) names.push(match[1])
  return names
}

export function componentIdFromDocPath (docPath) {
  const id = docPath.split(/[\\/]/).pop().replace(/\.mdx$/, '')
  return DOC_COMPONENT_ALIASES[id] ?? id
}

export function exampleSlugFromPreviewName (previewName, componentId) {
  const prefix = `${componentId}-`
  return previewName.startsWith(prefix) ? previewName.slice(prefix.length) : previewName
}

export function parseDemoRegistry (source) {
  const demos = new Map()
  const re = /"([^"]+)":\s*\{[\s\S]*?file:\s*"([^"]+\.tsx)"[\s\S]*?\}/g
  let match
  while ((match = re.exec(source))) demos.set(match[1], match[2])
  return demos
}

export function readReactComponentIds (reactComponentsDir = REACT_COMPONENTS) {
  return readdirSync(reactComponentsDir)
    .filter((name) => {
      const path = join(reactComponentsDir, name)
      return statSync(path).isDirectory() &&
        !INTERNAL_COMPONENT_DIRS.has(name) &&
        existsSync(join(path, 'index.ts'))
    })
    .sort()
}

function titleOf (slug) {
  return slug
    .split('-')
    .map((part) => part.length <= 3 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1))
    .join(' ')
}

function categoryOf (docPath) {
  const parent = docPath.split(/[\\/]/).at(-2) ?? ''
  return parent.replace(/^\(|\)$/g, '').replace(/-/g, ' ')
}

function componentIdFromRegistryFile (file) {
  return file.split('/')[0]
}

export function demoFileCandidates (componentId, slug) {
  const flatComponentId = DEMO_COMPONENT_ALIASES[componentId] ?? componentId
  const candidates = []
  if (BATCHED_EXAMPLE_COMPONENTS.has(componentId) && BATCHED_EXAMPLE_SLUGS[componentId]?.has(slug)) {
    candidates.push(`${componentId}/examples`)
  }
  candidates.push(`${componentId}/${slug}`)
  if (slug === 'basic' || slug === 'default' || SLUG_AWARE_FLAT_COMPONENTS.has(flatComponentId)) {
    candidates.push(flatComponentId)
  }
  return candidates
}

function hasPair (componentId, slug) {
  return demoFileCandidates(componentId, slug).some((file) =>
    existsSync(join(VUE_DEMOS, `${file}.tsx`)) &&
    existsSync(join(REACT_DEMOS, `${file}.tsx`))
  )
}

export function buildInventory ({
  componentDocsDir = COMPONENT_DOCS,
  demoRegistryPath = DEMO_REGISTRY,
  reactComponentsDir = REACT_COMPONENTS
} = {}) {
  const registry = parseDemoRegistry(readFileSync(demoRegistryPath, 'utf8'))
  const docs = walkFiles(componentDocsDir, (path) => path.endsWith('.mdx') && !path.endsWith(`${sep}index.mdx`))
  const docMeta = new Map()
  const previewMeta = new Map()
  const examples = []

  for (const docPath of docs.sort()) {
    const componentId = componentIdFromDocPath(docPath)
    docMeta.set(componentId, {
      title: titleOf(componentId),
      category: titleOf(categoryOf(docPath)),
      docPath: relative(componentDocsDir, docPath).replaceAll(sep, '/')
    })
    const mdx = readFileSync(docPath, 'utf8')
    for (const previewName of extractComponentPreviews(mdx)) {
      previewMeta.set(previewName, docMeta.get(componentId))
    }
  }

  for (const [id, upstreamFile] of registry.entries()) {
    const componentId = componentIdFromRegistryFile(upstreamFile)
    const slug = upstreamFile.split('/').pop().replace(/\.tsx$/, '')
    const meta = previewMeta.get(id) ?? docMeta.get(componentId)
    examples.push({
      id,
      componentId,
      slug,
      title: titleOf(slug),
      componentTitle: titleOf(componentId),
      category: meta?.category ?? 'Undocumented',
      docPath: meta?.docPath ?? '',
      upstreamFile,
      ported: hasPair(componentId, slug)
    })
  }

  const componentIds = new Set([...readReactComponentIds(reactComponentsDir), ...docMeta.keys()])
  const components = [...componentIds].sort().map((componentId) => {
    const meta = docMeta.get(componentId)
    const componentExamples = examples.filter((example) => example.componentId === componentId)
    return {
      id: componentId,
      title: meta?.title ?? titleOf(componentId),
      category: meta?.category ?? 'Undocumented',
      docPath: meta?.docPath ?? '',
      exampleCount: componentExamples.length,
      portedCount: componentExamples.filter((example) => example.ported).length
    }
  })

  return { components, examples }
}

function renderManifest (inventory) {
  return `/**\n` +
    ` * Generated by scripts/sync-playground-examples.mjs.\n` +
    ` * Source: ${COMPONENT_DOCS}\n` +
    ` */\n` +
    `export interface ComponentMeta {\n` +
    `  id: string\n` +
    `  title: string\n` +
    `  category: string\n` +
    `  docPath: string\n` +
    `  exampleCount: number\n` +
    `  portedCount: number\n` +
    `}\n\n` +
    `export interface ExampleMeta {\n` +
    `  id: string\n` +
    `  componentId: string\n` +
    `  slug: string\n` +
    `  title: string\n` +
    `  componentTitle: string\n` +
    `  category: string\n` +
    `  docPath: string\n` +
    `  upstreamFile: string\n` +
    `  ported: boolean\n` +
    `}\n\n` +
    `export const upstreamComponents = ${JSON.stringify(inventory.components, null, 2)} satisfies ComponentMeta[]\n\n` +
    `export const upstreamExamples = ${JSON.stringify(inventory.examples, null, 2)} satisfies ExampleMeta[]\n`
}

export function writeManifest (outFile = OUT_FILE) {
  const inventory = buildInventory()
  writeFileSync(outFile, renderManifest(inventory))
  return inventory
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const inventory = writeManifest()
  const ported = inventory.examples.filter((example) => example.ported).length
  console.log(`wrote ${relative(ROOT, OUT_FILE)} (${inventory.components.length} components, ${ported}/${inventory.examples.length} examples ported)`)
}
