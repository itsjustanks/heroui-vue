import { Skeleton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="skeleton--shimmer relative grid w-full max-w-xl grid-cols-3 gap-4 overflow-hidden rounded-xl">
      <Skeleton animationType="none" class="h-24 rounded-xl" />
      <Skeleton animationType="none" class="h-24 rounded-xl" />
      <Skeleton animationType="none" class="h-24 rounded-xl" />
    </div>);
export default SingleShimmer;
