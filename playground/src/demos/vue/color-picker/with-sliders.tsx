import type { ColorChannel, ColorSpace } from "@itsjustanks/heroui-vue";
import { ColorPicker, ColorSlider, ColorSwatch, Label, ListBox, Select } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const colorSpace = ref("hsl");
  const colorChannelsByColorSpace: Record<ColorSpace, ColorChannel[]> = {
    hsb: ["hue", "saturation", "brightness", "alpha"],
    hsl: ["hue", "saturation", "lightness", "alpha"],
    rgb: ["red", "green", "blue", "alpha"]
  };
  return () => <ColorPicker defaultValue="hsl(219, 58%, 93%)">
      <ColorPicker.Trigger>
        <ColorSwatch size="lg" />
        <Label>Pick a color</Label>
      </ColorPicker.Trigger>
      <ColorPicker.Popover class="max-w-62 gap-2 px-2 py-3">
        <Select aria-label="Color space" value={colorSpace.value} variant="secondary" onChange={value => colorSpace.value = value as ColorSpace}>
          <Select.Trigger>
            <Select.Value class="uppercase" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {Object.keys(colorChannelsByColorSpace).map(space => <ListBox.Item key={space} class="uppercase" id={space} textValue={space}>
                  {space}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>
        <div class="flex flex-col gap-2">
          {colorChannelsByColorSpace[colorSpace.value].map((channel: ColorChannel) =>
        // @ts-expect-error - TypeScript can't correlate dynamic colorSpace with channel type
        <ColorSlider key={channel} aria-label={channel} channel={channel} class="gap-1 px-1" colorSpace={colorSpace.value}>
              <Label class="capitalize">{channel}</Label>
              <ColorSlider.Output class="text-muted" />
              <ColorSlider.Track>
                <ColorSlider.Thumb />
              </ColorSlider.Track>
            </ColorSlider>)}
        </div>
      </ColorPicker.Popover>
    </ColorPicker>;
});
export default WithSliders;
