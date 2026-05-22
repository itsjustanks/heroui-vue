/**
 * extract-oss-manifest — capture upstream HeroUI OSS anatomy for parity checks.
 *
 * Source of truth:
 * - React anatomy/API: /Users/ankit/Downloads/heroui-3/packages/react
 * - Style slots/CSS:  /Users/ankit/Downloads/heroui-3/packages/styles
 */
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import {
  OSS_REACT_ROOT,
  OSS_STYLES_ROOT,
  ROOT,
  componentNamesFromArgs,
  extractCssClasses,
  extractStyleSlots,
  parseCompoundParts,
  parseDataSlots,
  parseJsxHosts,
  parseNamedExports,
  parsePropNames,
  parsePropTypes,
  pathExists,
  readText,
  relativePath,
  writeJsonFile
} from './parity-utils.mjs'

const DEFAULT_COMPONENTS = ['accordion', 'dropdown', 'table']

function buildManifest (component) {
  const reactDir = join(OSS_REACT_ROOT, 'src/components', component)
  const stylesDir = join(OSS_STYLES_ROOT, 'src/components', component)
  const cssPath = join(OSS_STYLES_ROOT, 'dist/components', component, `${component}.css`)

  const indexPath = join(reactDir, 'index.ts')
  const reactPath = join(reactDir, `${component}.tsx`)
  const stylesPath = join(stylesDir, `${component}.styles.ts`)

  for (const path of [indexPath, reactPath, stylesPath]) {
    if (!pathExists(path)) throw new Error(`Missing upstream OSS source for ${component}: ${path}`)
  }

  const indexText = readText(indexPath)
  const reactText = readText(reactPath)
  const styleInfo = extractStyleSlots(readText(stylesPath))
  const cssClasses = pathExists(cssPath) ? extractCssClasses(readText(cssPath)) : []

  return {
    schemaVersion: 1,
    kind: 'oss',
    component,
    generatedAt: new Date().toISOString(),
    source: {
      reactIndex: indexPath,
      reactComponent: reactPath,
      styles: stylesPath,
      css: pathExists(cssPath) ? cssPath : null
    },
    upstream: {
      exports: parseNamedExports(indexText),
      compoundParts: parseCompoundParts(indexText),
      propTypes: parsePropTypes(reactText),
      propNames: parsePropNames(reactText),
      dataSlots: parseDataSlots(reactText),
      styleSlots: styleInfo.slots,
      styleClasses: styleInfo.classes,
      cssClasses,
      renderHosts: parseJsxHosts(reactText)
    },
    local: {
      familyDir: relativePath(join(ROOT, 'src', component)),
      manifestNotes: []
    }
  }
}

export async function run () {
  const components = componentNamesFromArgs(DEFAULT_COMPONENTS)
  const written = []

  for (const component of components) {
    const manifest = buildManifest(component)
    const outPath = join(ROOT, 'parity/oss', `${component}.json`)
    writeJsonFile(outPath, manifest)
    written.push(outPath)
  }

  return written
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const written = await run()
  for (const path of written) console.log(`wrote ${relativePath(path)}`)
}
