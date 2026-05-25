import { Heart } from "@gravity-ui/icons";
import { ToggleButton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex items-center gap-3">
        <ToggleButton size="sm">
          <Heart />
          Small
        </ToggleButton>
        <ToggleButton size="md">
          <Heart />
          Medium
        </ToggleButton>
        <ToggleButton size="lg">
          <Heart />
          Large
        </ToggleButton>
      </div>
      <div class="flex items-center gap-3">
        <ToggleButton isIconOnly aria-label="Like" size="sm">
          <Heart />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Like" size="md">
          <Heart />
        </ToggleButton>
        <ToggleButton isIconOnly aria-label="Like" size="lg">
          <Heart />
        </ToggleButton>
      </div>
    </div>);
