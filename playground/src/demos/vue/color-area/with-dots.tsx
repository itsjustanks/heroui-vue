import { ColorArea } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ColorArea showDots defaultValue="hsl(200, 100%, 50%)">
      <ColorArea.Thumb />
    </ColorArea>);
