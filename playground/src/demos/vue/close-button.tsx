import { CloseButton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <CloseButton />
      <CloseButton aria-label="Dismiss" />
    </div>);
