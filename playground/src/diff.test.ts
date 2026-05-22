import assert from 'node:assert/strict'
import test from 'node:test'
import { diffLines } from './diff.ts'

test('pairs similar Vue and React TSX lines instead of marking the Vue block as deleted', () => {
  const vueSource = [
    "import { defineComponent } from 'vue'",
    "import { InputGroup, Label, TextField } from '@itsjustanks/heroui-vue'",
    '',
    'export default defineComponent(() => () => (',
    '  <div class="demo-col">',
    '    <TextField class="w-full max-w-[280px]" name="email">',
    '      <Label>Email address</Label>',
    '      <InputGroup>',
    '        <InputGroup.Input class="w-full" placeholder="name@email.com" />',
    '      </InputGroup>',
    '    </TextField>',
    '  </div>',
    '))'
  ].join('\n')

  const reactSource = [
    "import { InputGroup, Label, TextField } from '@heroui/react'",
    '',
    'export default function InputGroupDemo() {',
    '  return (',
    '    <div className="demo-col">',
    '      <TextField className="w-full max-w-[280px]" name="email">',
    '        <Label>Email address</Label>',
    '        <InputGroup>',
    '          <InputGroup.Input className="w-full" placeholder="name@email.com" />',
    '        </InputGroup>',
    '      </TextField>',
    '    </div>',
    '  )',
    '}'
  ].join('\n')

  const rows = diffLines(vueSource, reactSource)

  assert.ok(
    rows.some((row) =>
      row.vue?.includes('<TextField') &&
      row.react?.includes('<TextField') &&
      row.type === 'changed'
    ),
    'similar TextField lines should be paired as a changed row'
  )
  assert.equal(
    rows.some((row) => row.type === 'vue' && row.vue?.includes('<TextField')),
    false,
    'similar TextField lines should not be treated as Vue-only deletions'
  )

  const importRow = rows.find((row) => row.vue?.includes('@itsjustanks/heroui-vue'))
  assert.equal(importRow?.type, 'changed')
  assert.ok(
    importRow?.vueParts.some((part) => part.added && part.text.includes('itsjustanks')),
    'Vue-only import text should be highlighted inline'
  )
})
