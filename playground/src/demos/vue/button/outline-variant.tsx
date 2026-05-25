import { Button, ButtonGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <p class="text-sm text-muted">Button</p>
        <div class="flex flex-wrap gap-3">
          <Button variant="outline">Outline</Button>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-sm text-muted">ButtonGroup</p>
        <ButtonGroup variant="outline">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
    </div>);
export default OutlineVariant;
