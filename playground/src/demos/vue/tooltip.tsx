import { defineComponent } from 'vue'
import { Button, Tooltip } from '@itsjustanks/heroui-vue'

/**
 * Tooltip demo — Vue TSX, heroui-vue compound API.
 *
 * Matches HeroUI v3's `tooltip/basic` demo: the first child of the Tooltip root
 * becomes the trigger automatically — no explicit trigger wrapper.
 */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Tooltip delay={0}>
      <Button variant="secondary">Hover me</Button>
      <Tooltip.Content>
        <p>This is a tooltip</p>
      </Tooltip.Content>
    </Tooltip>

    <Tooltip delay={0}>
      <Button variant="tertiary">More info</Button>
      <Tooltip.Content>
        <p>Additional information shown on hover</p>
      </Tooltip.Content>
    </Tooltip>
  </div>
))
