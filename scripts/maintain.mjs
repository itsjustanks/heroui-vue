/**
 * maintain — run every upstream-tracking check and print a combined report.
 *
 * Aggregates:
 *   - check-upstream    is `@heroui/styles` behind its latest npm release?
 *   - check-coverage    which HeroUI components are not yet ported?
 *   - check-bem-drift   does every family still emit HeroUI's BEM classes?
 *
 * This is a diagnostic report: it always exits 0 once the report is printed
 * (a non-zero exit is reserved for an unexpected crash). Read the summary to
 * see which checks need attention. Invoked by `npm run maintain`.
 */
import { run as runUpstream } from './check-upstream.mjs'
import { run as runCoverage } from './check-coverage.mjs'
import { run as runBemDrift } from './check-bem-drift.mjs'

const MARK = { ok: 'OK  ', warn: 'WARN', error: 'FAIL' }

function printSection (result) {
  console.log('')
  console.log(`━━━ ${result.title} ━━━`)
  for (const line of result.lines) console.log(line)
}

async function main () {
  console.log('heroui-vue — upstream maintenance report')

  const results = [
    await runUpstream(),
    await runCoverage(),
    await runBemDrift()
  ]
  for (const result of results) printSection(result)

  console.log('')
  console.log('━━━ Summary ━━━')
  for (const result of results) console.log(`  [${MARK[result.status]}] ${result.title}`)

  const needsAttention = results.filter((r) => r.status !== 'ok').length
  console.log('')
  console.log(needsAttention === 0
    ? 'All checks clean.'
    : `${needsAttention} check(s) need attention — see the sections above.`)
}

main().catch((err) => {
  console.error('maintain: unexpected error')
  console.error(err)
  process.exit(1)
})
