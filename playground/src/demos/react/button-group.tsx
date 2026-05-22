import { Button, ButtonGroup } from '@heroui/react'

export default function ButtonGroupDemo() {
  return (
    <div className="demo-col">
      <div className="demo-row">
        <ButtonGroup>
          <Button>Previous</Button>
          <Button>
            <ButtonGroup.Separator />
            Next
          </Button>
        </ButtonGroup>
      </div>
      <div className="demo-row">
        <ButtonGroup variant="tertiary">
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
      <div className="demo-row">
        <ButtonGroup variant="outline">
          <Button>Save</Button>
          <Button>
            <ButtonGroup.Separator />
            Share
          </Button>
          <Button>
            <ButtonGroup.Separator />
            Export
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
