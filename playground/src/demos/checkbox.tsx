import { Checkbox, Label } from '@heroui/react'

export default function CheckboxDemo() {
  return (
    <div className="demo-col">
      <Checkbox id="terms">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox id="marketing" defaultChecked>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="marketing">Send me marketing emails</Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox id="newsletter" variant="secondary">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </Checkbox.Content>
      </Checkbox>

      <Checkbox id="disabled" disabled>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label htmlFor="disabled">Disabled option</Label>
        </Checkbox.Content>
      </Checkbox>
    </div>
  )
}
