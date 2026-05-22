/**
 * shot — screenshots the side-by-side Vue/React preview for given component ids.
 * Usage: node playground/shot.mjs button checkbox ...   (ids, or none = all)
 * Writes /tmp/shot-<id>.png. Requires the dev server on 127.0.0.1:5173.
 *
 * Hard 22s wall-clock cap per id via Promise.race — nothing can stall the run.
 */
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const BASE = process.env.PG_BASE ?? 'http://127.0.0.1:5173'

function readExamples () {
  const manifest = readFileSync(join(HERE, 'src/example-manifest.ts'), 'utf8')
  const match = manifest.match(/export const upstreamExamples = ([\s\S]*?) satisfies ExampleMeta\[]/)
  return match ? JSON.parse(match[1]).filter((example) => example.ported) : []
}

const examples = readExamples()
let ids = process.argv.slice(2)
if (ids.length === 0) {
  ids = examples.map((example) => `${example.componentId}/${example.slug}`).sort()
}

ids = ids.map((id) => {
  if (id.includes('/')) return id
  const exact = examples.find((example) => example.id === id)
  if (exact) return `${exact.componentId}/${exact.slug}`
  const first = examples.find((example) => example.componentId === id)
  return first ? `${first.componentId}/${first.slug}` : id
})

function urlFor (id) {
  const [componentId, slug] = id.split('/')
  return `${BASE}/?c=${componentId}&e=${slug ?? ''}`
}

const browser = await chromium.launch()

async function shoot (id) {
  const page = await browser.newPage({ viewport: { width: 1500, height: 1100 } })
  try {
    await page.goto(urlFor(id), { waitUntil: 'domcontentloaded', timeout: 12000 })
    await page.waitForTimeout(900)
    const opts = { path: `/tmp/shot-${id.replaceAll('/', '-')}.png`, animations: 'disabled', timeout: 7000 }
    const el = process.env.PG_FULL ? null : await page.$('.pg-panes')
    if (el) await el.screenshot(opts)
    else await page.screenshot(opts)
  } finally {
    await page.close().catch(() => {})
  }
}

for (const id of ids) {
  const cap = new Promise((_, rej) => setTimeout(() => rej(new Error('hard-timeout')), 22000))
  try {
    await Promise.race([shoot(id), cap])
    console.log(`ok   ${id}`)
  } catch (e) {
    console.log(`FAIL ${id}  ${String(e.message || e).slice(0, 70)}`)
  }
}

await browser.close()
