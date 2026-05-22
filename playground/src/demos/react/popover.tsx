import { Button, Popover } from '@heroui/react'

/** Popover demo — React, HeroUI v3. */
export default function PopoverDemo() {
  return (
    <div className="demo-row">
      <Popover>
        <Button>Click me</Button>
        <Popover.Content className="max-w-64">
          <Popover.Dialog>
            <Popover.Heading>Popover Title</Popover.Heading>
            <p className="mt-2 text-sm text-muted">
              This is the popover content. You can put any content here.
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  )
}
