import { ProgressCircle } from '@heroui/react'

export default function ProgressCircleDemo() {
  return (
    <div className="demo-row">
      <ProgressCircle aria-label="Loading" value={60}>
        <ProgressCircle.Track>
          <ProgressCircle.TrackCircle />
          <ProgressCircle.FillCircle />
        </ProgressCircle.Track>
      </ProgressCircle>
    </div>
  )
}
