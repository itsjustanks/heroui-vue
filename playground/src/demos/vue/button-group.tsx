import { defineComponent } from 'vue'
import { Button, ButtonGroup } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-col">
    <div class="demo-row">
      <ButtonGroup>
        <Button>Previous</Button>
        <Button>
          <ButtonGroup.Separator />
          Next
        </Button>
      </ButtonGroup>
    </div>
    <div class="demo-row">
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
    <div class="demo-row">
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
))
