import { Label, TimeField } from '@heroui/react'

export default function TimeFieldDemo() {
  return (
    <div className="demo-row">
      <TimeField className="w-64" name="time">
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>
            {(segment) => <TimeField.Segment segment={segment} />}
          </TimeField.Input>
        </TimeField.Group>
      </TimeField>
    </div>
  )
}
