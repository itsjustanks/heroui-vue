import { Button, Popover } from "@itsjustanks/heroui-vue";

/** Popover demo — React, HeroUI v3. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
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
    </div>);
