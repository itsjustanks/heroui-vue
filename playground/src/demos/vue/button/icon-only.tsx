import { Ellipsis, Gear, TrashBin } from "@gravity-ui/icons";
import { Button } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex gap-3">
      <Button isIconOnly variant="tertiary">
        <Ellipsis />
      </Button>
      <Button isIconOnly variant="secondary">
        <Gear />
      </Button>
      <Button isIconOnly variant="danger">
        <TrashBin />
      </Button>
    </div>);
