import { ColorSwatch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-3">
      <ColorSwatch color="#0485F7" shape="circle" />
      <ColorSwatch color="#0485F7" shape="square" />
    </div>);
