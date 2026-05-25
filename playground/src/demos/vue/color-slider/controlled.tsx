import { ColorSlider, ColorSwatch, Label } from "@itsjustanks/heroui-vue";
import { parseColor } from "react-aria-components";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const color = ref(parseColor("hsl(200, 100%, 50%)"));
  return () => <div class="flex w-full max-w-xs flex-col gap-4">
      <ColorSlider channel="hue" value={color.value} onChange={v => color.value = v}>
        <Label>Hue</Label>
        <ColorSlider.Output />
        <ColorSlider.Track>
          <ColorSlider.Thumb />
        </ColorSlider.Track>
      </ColorSlider>
      <div class="flex items-center gap-2">
        <ColorSwatch color={color.value} size="sm" />
        <p class="text-sm text-muted">
          Current color: <code class="font-mono">{color.value.toString("hsl")}</code>
        </p>
      </div>
    </div>;
});
export default Controlled;
