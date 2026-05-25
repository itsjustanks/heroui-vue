import { Button, Tooltip } from "@itsjustanks/heroui-vue";

/** Tooltip demo — React, HeroUI v3. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
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
    </div>);
