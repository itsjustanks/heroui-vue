import { Checkbox, Label } from '@heroui/react'
import { currentExample } from '../shared'

export default function CheckboxDemo() {
  const example = currentExample('basic')
  const variant = example === 'variants' ? 'secondary' : undefined
  const disabled = example === 'disabled'
  const selected = example === 'default-selected' || example === 'controlled'
  const indeterminate = example === 'indeterminate'

  return (
    <div className="demo-col">
      <Checkbox
        id="terms"
        variant={variant}
        isDisabled={disabled}
        defaultSelected={selected}
        isIndeterminate={indeterminate}
      >
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="terms">{indeterminate ? 'Partially selected' : 'Accept terms and conditions'}</Label>
          {example === 'with-description' && <span className="text-sm text-muted-foreground">You can update this later.</span>}
        </Checkbox.Content>
      </Checkbox>
      {example === 'variants' && (
        <Checkbox id="updates" variant="secondary" defaultSelected>
          <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
          <Checkbox.Content><Label htmlFor="updates">Secondary checkbox</Label></Checkbox.Content>
        </Checkbox>
      )}
    </div>
  )
}
