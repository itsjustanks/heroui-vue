import type { Color } from "@itsjustanks/heroui-vue";
import { ColorArea, ColorSwatch, parseColor } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const color = ref(parseColor("#9B80FF"));
  return () => <div class="flex flex-col gap-4">
      <ColorArea colorSpace="rgb" value={color.value} xChannel="red" yChannel="green" onChange={setColor}>
        <ColorArea.Thumb />
      </ColorArea>
      <div class="flex w-[300px] items-center gap-3">
        <ColorSwatch color={color.value} size="md" />
        <p class="text-sm text-muted">
          Current color:{" "}
          <span class="font-medium">{color.value ? color.value.toString("hex") : "(empty)"}</span>
        </p>
      </div>
    </div>;
});
