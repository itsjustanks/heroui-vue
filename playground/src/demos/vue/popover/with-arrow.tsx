import { Ellipsis } from "../../../gravity-icons-vue";
import { Button, Popover } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-4">
      <Popover>
        <Button variant="secondary">With Arrow</Button>
        <Popover.Content class="max-w-64">
          <Popover.Dialog>
            <Popover.Arrow />
            <Popover.Heading>Popover with Arrow</Popover.Heading>
            <p class="mt-2 text-sm text-muted">
              The arrow shows which element triggered the popover.
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>

      <Popover>
        <Button isIconOnly variant="tertiary">
          <Ellipsis />
        </Button>
        <Popover.Content class="max-w-64" offset={10}>
          <Popover.Dialog>
            <Popover.Arrow />
            <Popover.Heading>Popover with Arrow</Popover.Heading>
            <p class="mt-2 text-sm text-muted">
              The arrow shows which element triggered the popover.
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>);
export default PopoverWithArrow;
