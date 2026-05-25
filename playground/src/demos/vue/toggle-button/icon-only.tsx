import { Bookmark, Heart } from "../../../gravity-icons-vue";
import { ToggleButton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-3">
      <ToggleButton isIconOnly aria-label="Like">
        <Heart />
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Bookmark" variant="ghost">
        <Bookmark />
      </ToggleButton>
    </div>);
export default IconOnly;
