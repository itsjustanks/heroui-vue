import { Globe, Plus, TrashBin } from "@gravity-ui/icons";
import { Button, ButtonGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col items-start gap-2">
        <p class="text-sm text-muted">With icons</p>
        <ButtonGroup variant="secondary">
          <Button>
            <Globe />
            Search
          </Button>
          <Button>
            <ButtonGroup.Separator />
            <Plus />
            Add
          </Button>
          <Button>
            <ButtonGroup.Separator />
            <TrashBin />
            Delete
          </Button>
        </ButtonGroup>
      </div>
      <div class="flex flex-col items-start gap-2">
        <p class="text-sm text-muted">Icon only buttons</p>
        <ButtonGroup variant="tertiary">
          <Button isIconOnly>
            <Globe />
          </Button>
          <Button isIconOnly>
            <ButtonGroup.Separator />
            <Plus />
          </Button>
          <Button isIconOnly>
            <ButtonGroup.Separator />
            <TrashBin />
          </Button>
        </ButtonGroup>
      </div>
    </div>);
