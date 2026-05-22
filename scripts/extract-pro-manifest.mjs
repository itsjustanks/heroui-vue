/**
 * extract-pro-manifest — capture installed HeroUI Pro anatomy for private parity checks.
 *
 * This records only metadata needed for parity checks. It does not copy Pro
 * source or CSS into the public package build.
 */
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import {
  PRO_REACT_ROOT,
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
  readJson,
  readText,
  relativePath,
  writeJsonFile
} from './parity-utils.mjs'

const DEFAULT_COMPONENTS = ['kpi', 'sheet']

function buildManifest (component) {
  const packageJsonPath = join(PRO_REACT_ROOT, 'package.json')
  const componentDir = join(PRO_REACT_ROOT, 'dist/components', component)
  const indexPath = join(componentDir, 'index.d.ts')
  const jsPath = join(componentDir, `${component}.js`)
  const dtsPath = join(componentDir, `${component}.d.ts`)
  const stylesPath = join(componentDir, `${component}.styles.js`)
  const stylesDtsPath = join(componentDir, `${component}.styles.d.ts`)
  const cssPath = join(PRO_REACT_ROOT, 'dist/css/components', `${component}.css`)

  for (const path of [packageJsonPath, indexPath, jsPath, dtsPath, stylesPath]) {
    if (!pathExists(path)) throw new Error(`Missing installed Pro source for ${component}: ${path}`)
  }

  const pkg = readJson(packageJsonPath)
  const indexText = readText(indexPath)
  const jsText = readText(jsPath)
  const dtsText = readText(dtsPath)
  const styleInfo = extractStyleSlots(readText(stylesPath))
  const cssClasses = pathExists(cssPath) ? extractCssClasses(readText(cssPath)) : []

  return {
    schemaVersion: 1,
    kind: 'pro',
    component,
    generatedAt: new Date().toISOString(),
    source: {
      package: packageJsonPath,
      packageExport: packageExportFor(pkg.exports, component),
      indexTypes: indexPath,
      compiledComponent: jsPath,
      componentTypes: dtsPath,
      styles: stylesPath,
      styleTypes: pathExists(stylesDtsPath) ? stylesDtsPath : null,
      css: pathExists(cssPath) ? cssPath : null
    },
    upstream: {
      exports: parseNamedExports(indexText),
      compoundParts: parseCompoundParts(indexText),
      propTypes: parsePropTypes(dtsText),
      propNames: parsePropNames(dtsText),
      dataSlots: parseDataSlots(jsText),
      styleSlots: styleInfo.slots,
      styleClasses: styleInfo.classes,
      cssClasses,
      renderHosts: parseJsxHosts(jsText)
    },
    local: {
      familyDir: relativePath(join(ROOT, 'pro/src', component)),
      manifestNotes: []
    }
  }
}

export async function run () {
  const components = componentNamesFromArgs(DEFAULT_COMPONENTS)
  const written = []

  for (const component of components) {
    const manifest = buildManifest(component)
    const outPath = join(ROOT, 'parity/pro', `${component}.json`)
    writeJsonFile(outPath, manifest)
    written.push(outPath)
  }

  return written
}

function packageExportFor (exportsField, component) {
  const key = `./${component}`
  if (!exportsField || typeof exportsField !== 'object') return null
  return exportsField[key] ?? null
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const written = await run()
  for (const path of written) console.log(`wrote ${relativePath(path)}`)
}
