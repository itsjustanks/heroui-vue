import { Button, ButtonGroup } from '@heroui/react'

export default function ButtonGroupDemo() {
  return (
    <div className="demo-col">
      <ButtonGroup>
        <Button>Previous</Button>
        <Button>
          <ButtonGroup.Separator />
          Next
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>
          <ButtonGroup.Separator />
          Center
        </Button>
        <Button>
          <ButtonGroup.Separator />
          Right
        </Button>
      </ButtonGroup>
    </div>
  )
}
