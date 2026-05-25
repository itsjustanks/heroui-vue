import { Heart } from "@gravity-ui/icons";
import { ToggleButton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ToggleButton>
      <Heart />
      Like
    </ToggleButton>);
