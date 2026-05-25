import { ColorSlider, ColorSwatch, Label } from "@itsjustanks/heroui-vue";
import { parseColor } from "react-aria-components";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const color = ref(parseColor("rgb(255, 100, 50)"));
  return () => <div class="flex w-full max-w-xs flex-col gap-4">
      <ColorSlider channel="red" value={color.value} onChange={setColor}>
        <Label>Red</Label>
        <ColorSlider.Output />
        <ColorSlider.Track>
          <ColorSlider.Thumb />
        </ColorSlider.Track>
      </ColorSlider>
      <ColorSlider channel="green" value={color.value} onChange={setColor}>
        <Label>Green</Label>
        <ColorSlider.Output />
        <ColorSlider.Track>
          <ColorSlider.Thumb />
        </ColorSlider.Track>
      </ColorSlider>
      <ColorSlider channel="blue" value={color.value} onChange={setColor}>
        <Label>Blue</Label>
        <ColorSlider.Output />
        <ColorSlider.Track>
          <ColorSlider.Thumb />
        </ColorSlider.Track>
      </ColorSlider>
      <div class="flex items-center gap-2">
        <ColorSwatch color={color.value} size="sm" />
        <p class="text-sm text-muted">
          Current color: <code class="font-mono">{color.value.toString("rgb")}</code>
        </p>
      </div>
    </div>;
});
