import { TextArea } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="w-[400px] space-y-3">
      <TextArea fullWidth placeholder="Full width textarea" />
    </div>);
