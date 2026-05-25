import { Skeleton } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="w-full max-w-sm space-y-4">
      {Array.from({
    length: 3
  }).map((_, index) => <div key={index} class="flex items-center gap-3">
          <Skeleton class="h-10 w-10 shrink-0 rounded-lg" />
          <div class="flex-1 space-y-2">
            <Skeleton class="h-3 w-full rounded" />
            <Skeleton class="h-3 w-4/5 rounded" />
          </div>
        </div>)}
    </div>);
