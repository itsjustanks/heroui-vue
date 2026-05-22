import { Label, NumberField } from '@heroui/react'

export default function NumberFieldDemo() {
  return (
    <div className="demo-row">
      <NumberField defaultValue={1024} minValue={0} name="width">
        <Label>Width</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
    </div>
  )
}
