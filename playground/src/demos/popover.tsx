import { Button, Popover } from '@heroui/react'

export default function PopoverDemo() {
  return (
    <div className="demo-row">
      <Popover>
        <Button>Open popover</Button>
        <Popover.Content className="max-w-64">
          <Popover.Dialog>
            <Popover.Heading>Popover title</Popover.Heading>
            <p className="mt-2 text-sm text-muted">
              Built on React Aria. Compare the enter/exit animation with the Vue port.
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  )
}
