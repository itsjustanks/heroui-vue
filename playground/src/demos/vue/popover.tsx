import { defineComponent } from 'vue'
import { Button, Popover } from '@itsjustanks/heroui-vue'

/**
 * Popover demo — Vue TSX, heroui-vue compound API.
 *
 * Matches HeroUI v3's `popover/basic` demo: the first child of the Popover root
 * becomes the trigger automatically — no explicit trigger wrapper.
 */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Popover>
      <Button>Click me</Button>
      <Popover.Content class="max-w-64">
        <Popover.Dialog>
          <Popover.Heading>Popover Title</Popover.Heading>
          <p class="mt-2 text-sm text-muted">
            This is the popover content. You can put any content here.
          </p>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  </div>
))
