import { Button, Tooltip } from '@heroui/react'

export default function TooltipDemo() {
  return (
    <div className="demo-row">
      <Tooltip delay={300}>
        <Button variant="secondary">Hover me</Button>
        <Tooltip.Content>
          <p>This is a tooltip</p>
        </Tooltip.Content>
      </Tooltip>
    </div>
  )
}
