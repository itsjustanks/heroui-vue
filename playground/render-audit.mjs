/**
 * render-audit — loads every component in headless Chrome and compares the
 * REAL rendered output of the Vue pane against the React pane.
 *
 * The static markup audit (scripts/audit-parity.mjs) proves the demos use the
 * same tags; this proves they actually RENDER the same DOM. It compares the
 * `data-slot` sequence each side emits, and flags crashes / console errors.
 *
 * Requires the playground dev server running. Usage:
 *   node playground/render-audit.mjs
 */
import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const BASE = process.env.PG_BASE ?? 'http://127.0.0.1:5173'

function readExamples () {
  const manifest = readFileSync(join(HERE, 'src/example-manifest.ts'), 'utf8')
  const match = manifest.match(/export const upstreamExamples = ([\s\S]*?) satisfies ExampleMeta\[]/)
  return match ? JSON.parse(match[1]) : []
}

const examples = readExamples().filter((example) => example.ported)
const ids = (process.argv.length > 2 ? process.argv.slice(2) : examples.map((example) => `${example.componentId}/${example.slug}`))
  .map((id) => {
    if (id.includes('/')) return id
    const exact = examples.find((example) => example.id === id)
    if (exact) return `${exact.componentId}/${exact.slug}`
    const first = examples.find((example) => example.componentId === id)
    return first ? `${first.componentId}/${first.slug}` : id
  })
  .sort()

function urlFor (id) {
  const [componentId, slug] = id.split('/')
  return `${BASE}/?c=${componentId}&e=${slug ?? ''}`
}

function normalizeSlots (id, slots) {
  if (!id.startsWith('breadcrumbs/')) return slots

  // @heroui/react 3.0.5's Breadcrumbs runtime does not expose the link and
  // separator data slots even though the local v3 source does. Keep the audit
  // focused on structural item parity until the upstream runtime catches up.
  return slots.filter((slot) => slot !== 'link' && slot !== 'breadcrumbs-separator')
}

const browser = await chromium.launch()
const page = await browser.newPage()
const report = []

for (const id of ids) {
  const errors = []
  page.removeAllListeners('console')
  page.removeAllListeners('pageerror')
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)) })
  page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)))

  try {
    await page.goto(urlFor(id), { waitUntil: 'load', timeout: 15000 })
  } catch (e) {
    report.push({ id, status: 'NAV-FAIL', detail: String(e).slice(0, 120) })
    continue
  }
  await page.waitForTimeout(700)

  const data = await page.evaluate(() => {
    const slotSeq = (paneSel) => [...document.querySelectorAll(`${paneSel} [data-slot]`)]
      .map((e) => e.getAttribute('data-slot'))
    const vuePane = document.querySelector('.pg-pane--vue .pg-pane-body')
    const reactPane = document.querySelector('.pg-pane--react .pg-pane-body')
    return {
      vue: slotSeq('.pg-pane--vue'),
      react: slotSeq('.pg-pane--react'),
      vueErr: vuePane?.querySelector('.demo-error')?.textContent?.slice(0, 160) ?? null,
      vueText: (vuePane?.textContent ?? '').replace(/\s+/g, ' ').trim(),
      vueEls: vuePane ? vuePane.querySelectorAll('*').length : 0,
      reactEls: reactPane ? reactPane.querySelectorAll('*').length : 0
    }
  })

  // Classify.
  const sourceDump = /=>\s*\{|renderFnWithContext|setBlockTracking|function\s*\(/.test(data.vueText)
  let status = 'OK'
  let detail = ''

  if (data.vueErr) {
    status = 'CRASH'
    detail = data.vueErr
  } else if (sourceDump) {
    status = 'SOURCE-DUMP'
    detail = data.vueText.slice(0, 120)
  } else if (data.vueEls < 2 && data.reactEls > 2) {
    status = 'EMPTY'
    detail = `vue rendered ${data.vueEls} els, react ${data.reactEls}`
  } else if (normalizeSlots(id, data.vue).join('|') !== normalizeSlots(id, data.react).join('|')) {
    status = 'SLOT-DIFF'
    detail = `vue:[${normalizeSlots(id, data.vue).join(',')}]  react:[${normalizeSlots(id, data.react).join(',')}]`
  }
  if (errors.length && status === 'OK') { status = 'CONSOLE-ERR'; detail = errors[0] }

  report.push({ id, status, detail, errors })
}

await browser.close()

// ── output ───────────────────────────────────────────────────────────────────
const bad = report.filter((r) => r.status !== 'OK')
console.log('━━━ render audit (Vue pane vs React pane) ━━━\n')
for (const r of report) {
  if (r.status === 'OK') { console.log(`✓ ${r.id}`); continue }
  console.log(`✗ ${r.id}  [${r.status}]`)
  if (r.detail) console.log(`    ${r.detail}`)
}
console.log(`\n${report.length} components · ${report.length - bad.length} OK · ${bad.length} divergent`)
writeFileSync(join(HERE, 'render-audit.json'), JSON.stringify(report, null, 2))
process.exitCode = bad.length ? 1 : 0
