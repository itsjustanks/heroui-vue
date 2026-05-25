import type { ToastContentValue } from "@itsjustanks/heroui-vue";
import { Button, Toast, ToastContent, ToastDescription, ToastIndicator, ToastQueue, ToastTitle } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const customQueue = new ToastQueue();
  return () => <div class="flex h-full max-w-xl flex-col items-center justify-center">
      <Toast.Provider placement="bottom" queue={customQueue}>
        {({
        toast: toastItem
      }) => {
        const content = toastItem.content as ToastContentValue;
        return <Toast class="rounded-xl border border-border" toast={toastItem} variant={content.variant}>
              <ToastContent>
                <div class="flex items-center gap-2">
                  <ToastIndicator class="text-accent" variant={content.variant} />
                  <div class="flex flex-col pr-6">
                    {content.title ? <ToastTitle class="text-accent">{content.title}</ToastTitle> : null}
                    {content.description ? <ToastDescription>{content.description}</ToastDescription> : null}
                  </div>
                </div>
              </ToastContent>
              <Toast.CloseButton class="absolute top-1/2 right-2 -translate-y-1/2 border-none bg-transparent opacity-100 [&>svg]:size-4" />
            </Toast>;
      }}
      </Toast.Provider>
      <Button size="sm" variant="secondary" onPress={() => {
      customQueue.add({
        description: "This uses a custom render function",
        title: "Custom layout toast",
        variant: "default"
      });
    }}>
        Custom toast
      </Button>
    </div>;
});
