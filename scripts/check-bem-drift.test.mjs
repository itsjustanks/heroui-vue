import assert from 'node:assert/strict'
import test from 'node:test'
import { run } from './check-bem-drift.mjs'

test('families that consume upstream variant functions are not reported as BEM drift', async () => {
  const result = await run()

  assert.equal(
    result.status,
    'ok',
    result.lines.join('\n')
  )
})
