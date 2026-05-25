import { Surface, TextArea } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Surface class="w-full rounded-3xl p-6">
      <TextArea class="w-full min-w-[280px]" placeholder="Describe your product" variant="secondary" />
    </Surface>);
