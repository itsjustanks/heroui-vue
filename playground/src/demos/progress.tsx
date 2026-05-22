import { Label, ProgressBar } from '@heroui/react'

export default function ProgressDemo() {
  return (
    <div className="demo-col" style={{ width: '280px' }}>
      <ProgressBar aria-label="Loading" className="w-full" value={60}>
        <Label>Loading</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>

      <ProgressBar aria-label="Success" className="w-full" color="success" value={80}>
        <Label>Success</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>

      <ProgressBar aria-label="Warning" className="w-full" color="warning" value={45}>
        <Label>Warning</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>

      <ProgressBar aria-label="Danger" className="w-full" color="danger" value={30}>
        <Label>Danger</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>

      <ProgressBar aria-label="Indeterminate" className="w-full" isIndeterminate>
        <Label>Indeterminate</Label>
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
    </div>
  )
}
