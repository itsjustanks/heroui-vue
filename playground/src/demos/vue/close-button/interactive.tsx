import { CloseButton } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const count = ref(0);
  return () => <div class="flex flex-col items-center justify-center gap-4">
      <CloseButton aria-label={`Close (clicked ${count.value} times)`} onPress={() => count.value = count.value + 1} />
      <span class="text-sm text-muted">Clicked: {count.value} times</span>
    </div>;
});
export default Interactive;
