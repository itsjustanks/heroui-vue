import { Skeleton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="shadow-panel w-[250px] space-y-5 rounded-lg bg-transparent p-4">
      <Skeleton class="h-32 rounded-lg" />
      <div class="space-y-3">
        <Skeleton class="h-3 w-3/5 rounded-lg" />
        <Skeleton class="h-3 w-4/5 rounded-lg" />
        <Skeleton class="h-3 w-2/5 rounded-lg" />
      </div>
    </div>);
export default Basic;
