import assert from 'node:assert/strict'
import test from 'node:test'
import { run } from './check-coverage.mjs'

test('every upstream HeroUI style component maps to a Vue family', async () => {
  const result = await run()

  assert.equal(
    result.status,
    'ok',
    result.lines.join('\n')
  )
})
