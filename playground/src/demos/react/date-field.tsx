import { DateField, Label } from '@heroui/react'

export default function DateFieldDemo() {
  return (
    <div className="demo-row">
      <DateField className="w-64" name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
    </div>
  )
}
