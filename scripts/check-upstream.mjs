/**
 * check-upstream — is the pinned `@heroui/styles` behind the latest npm release?
 *
 * `@heroui/styles` is heroui-vue's visual layer. Keeping it current is how the
 * port inherits upstream design fixes. This compares the installed version to
 * the `latest` dist-tag on the npm registry and reports whether to update.
 *
 * Plain Node ESM, no dependencies. Run directly (`node scripts/check-upstream.mjs`)
 * or via `npm run maintain`.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PKG = '@heroui/styles'

/** Version of `@heroui/styles` currently installed in node_modules. */
function installedVersion () {
  const file = join(ROOT, 'node_modules', PKG, 'package.json')
  return JSON.parse(readFileSync(file, 'utf8')).version
}

/** Version carried by the `latest` dist-tag on the npm registry. */
async function latestVersion () {
  const res = await fetch(`https://registry.npmjs.org/${PKG}/latest`, {
    headers: { accept: 'application/json' },
    signal: AbortSignal.timeout(8000)
  })
  if (!res.ok) throw new Error(`registry responded ${res.status}`)
  return (await res.json()).version
}

/** Compare two semver strings (prerelease tags ignored): -1 | 0 | 1. */
function cmpSemver (a, b) {
  const parts = (v) => v.split('-')[0].split('.').map((n) => parseInt(n, 10) || 0)
  const pa = parts(a)
  const pb = parts(b)
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] < pb[i] ? -1 : 1
  }
  return 0
}

export async function run () {
  const installed = installedVersion()
  const lines = [`installed ${PKG}: ${installed}`]

  let latest
  try {
    latest = await latestVersion()
  } catch (err) {
    lines.push(`could not reach the npm registry (${err.message})`)
    lines.push('skipped — re-run with network access to check for updates')
    return { title: 'Upstream version', status: 'warn', lines }
  }

  lines.push(`latest on npm:   ${latest}`)
  lines.push('')
  if (cmpSemver(installed, latest) < 0) {
    lines.push(`UPDATE AVAILABLE: ${installed} -> ${latest}`)
    lines.push(`run \`npm install ${PKG}@latest\`, then \`npm run maintain\` again`)
    return { title: 'Upstream version', status: 'warn', lines }
  }
  lines.push('up to date')
  return { title: 'Upstream version', status: 'ok', lines }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await run()
  console.log(`━━━ ${result.title} ━━━`)
  for (const line of result.lines) console.log(line)
}
