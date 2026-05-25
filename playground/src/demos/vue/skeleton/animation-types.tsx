import { Skeleton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="grid w-full max-w-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div class="space-y-2">
        <p class="truncate text-xs text-muted">Shimmer</p>
        <div class="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
          <Skeleton animationType="shimmer" class="h-20 rounded-lg" />
          <Skeleton animationType="shimmer" class="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="shimmer" class="h-3 w-4/5 rounded-lg" />
        </div>
      </div>

      <div class="space-y-2">
        <p class="truncate text-xs text-muted">Pulse</p>
        <div class="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
          <Skeleton animationType="pulse" class="h-20 rounded-lg" />
          <Skeleton animationType="pulse" class="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="pulse" class="h-3 w-4/5 rounded-lg" />
        </div>
      </div>

      <div class="space-y-2">
        <p class="truncate text-xs text-muted">None</p>
        <div class="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
          <Skeleton animationType="none" class="h-20 rounded-lg" />
          <Skeleton animationType="none" class="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="none" class="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </div>);
export default AnimationTypes;
