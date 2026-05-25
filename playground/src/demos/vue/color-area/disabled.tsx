import { ColorArea } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ColorArea isDisabled defaultValue="hsl(200, 100%, 50%)">
      <ColorArea.Thumb />
    </ColorArea>);
