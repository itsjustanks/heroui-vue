import { defineComponent } from 'vue'
import { Checkbox, Label } from '@itsjustanks/heroui-vue'
import { currentExample } from '../shared'

export default defineComponent(() => () => {
  const example = currentExample('basic')
  const variant = example === 'variants' ? 'secondary' : undefined
  const disabled = example === 'disabled'
  const selected = example === 'default-selected' || example === 'controlled'
  const indeterminate = example === 'indeterminate'

  return (
    <div class="demo-col">
      <Checkbox
        id="terms"
        variant={variant}
        isDisabled={disabled}
        defaultSelected={selected}
        defaultValue={indeterminate ? 'indeterminate' : undefined}
      >
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label for="terms">{indeterminate ? 'Partially selected' : 'Accept terms and conditions'}</Label>
          {example === 'with-description' && <span class="text-sm text-muted-foreground">You can update this later.</span>}
        </Checkbox.Content>
      </Checkbox>
      {example === 'variants' && (
        <Checkbox id="updates" variant="secondary" defaultSelected>
          <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
          <Checkbox.Content><Label for="updates">Secondary checkbox</Label></Checkbox.Content>
        </Checkbox>
      )}
    </div>
  )
})
