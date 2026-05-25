import { Button, Popover } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-4">
      <Popover>
        <Button>Click me</Button>
        <Popover.Content class="max-w-64" render={props => <div {...props} data-custom="foo" />}>
          <Popover.Dialog>
            <Popover.Heading>Popover Title</Popover.Heading>
            <p class="mt-2 text-sm text-muted">
              This is the popover content. You can put any content here.
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>);
export default CustomRenderFunction;
