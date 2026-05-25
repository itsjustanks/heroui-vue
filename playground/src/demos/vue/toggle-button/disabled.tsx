import { Heart, HeartFill } from "@gravity-ui/icons";
import { ToggleButton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-3">
      <ToggleButton isDisabled>
        <Heart />
        Like
      </ToggleButton>
      <ToggleButton defaultSelected isDisabled>
        <HeartFill />
        Like
      </ToggleButton>
    </div>);
