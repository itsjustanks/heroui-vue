import { Label, Meter } from '@heroui/react'

export default function MeterDemo() {
  return (
    <div className="demo-row">
      <Meter aria-label="Storage" className="w-64" value={60}>
        <Label>Storage</Label>
        <Meter.Output />
        <Meter.Track>
          <Meter.Fill />
        </Meter.Track>
      </Meter>
    </div>
  )
}
