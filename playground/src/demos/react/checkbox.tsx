import { Checkbox, Label } from '@heroui/react'

export default function CheckboxDemo() {
  return (
    <div className="demo-row">
      <Checkbox id="terms">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </Checkbox.Content>
      </Checkbox>
    </div>
  )
}
