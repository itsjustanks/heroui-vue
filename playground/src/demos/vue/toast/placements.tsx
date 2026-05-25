import type { ToastVariants } from "@itsjustanks/heroui-vue";
import { Button, Toast, ToastQueue } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
type Placement = NonNullable<ToastVariants["placement"]>;
const placements = ["top start", "top", "top end", "bottom start", "bottom", "bottom end"] as const;

// Create a separate queue for each placement
const placementQueues = Object.fromEntries(placements.map(p => [p, new ToastQueue({
  maxVisibleToasts: 3
})])) as Record<Placement, ToastQueue>;
export default defineComponent(() => {
  const showToast = (placement: Placement) => {
    placementQueues[placement].add({
      description: "Event has been created",
      title: "Event created",
      variant: "default"
    });
  };
  return () => <div class="flex h-full flex-col items-center justify-center gap-6">
      {/* Render a ToastProvider for each placement */}
      {placements.map(p => <Toast.Provider key={p} placement={p} queue={placementQueues[p]} />)}
      <div class="flex max-w-xs flex-wrap justify-center gap-2">
        {placements.map(p => <Button key={p} size="sm" variant="secondary" onPress={() => showToast(p)}>
            {p}
          </Button>)}
      </div>
    </div>;
});
