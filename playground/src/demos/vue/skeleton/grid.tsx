import { Skeleton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="grid w-full max-w-xl grid-cols-3 gap-4">
      <Skeleton class="h-24 rounded-xl" />
      <Skeleton class="h-24 rounded-xl" />
      <Skeleton class="h-24 rounded-xl" />
    </div>);
