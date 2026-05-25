import { Input, Surface } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Surface class="flex h-[180px] w-[280px] items-center justify-center rounded-3xl bg-surface p-4">
      <Input class="w-full" placeholder="Your name" variant="secondary" />
    </Surface>);
