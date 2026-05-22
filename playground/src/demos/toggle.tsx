import { ToggleButton } from '@heroui/react'

export default function ToggleDemo() {
  return (
    <div className="demo-row">
      <ToggleButton>Like</ToggleButton>
      <ToggleButton variant="ghost">Ghost</ToggleButton>
    </div>
  )
}
