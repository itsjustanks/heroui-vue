import { Label, ProgressBar } from '@heroui/react'

export default function ProgressDemo() {
  return (
    <div className="demo-row">
      <ProgressBar aria-label="Loading" className="w-64" value={60}>
        <Label>Loading</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
    </div>
  )
}
