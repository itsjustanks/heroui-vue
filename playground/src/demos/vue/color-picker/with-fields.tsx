import type { ColorChannel, ColorSpace } from "@itsjustanks/heroui-vue";
import { ColorArea, ColorField, ColorPicker, ColorSlider, ColorSwatch, Label, ListBox, Select } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const colorSpace = ref("hsl");
  const colorChannelsByColorSpace: Record<ColorSpace, ColorChannel[]> = {
    hsb: ["hue", "saturation", "brightness"],
    hsl: ["hue", "saturation", "lightness"],
    rgb: ["red", "green", "blue"]
  };
  return () => <ColorPicker defaultValue="hsla(220, 90%, 50%, 0.8)">
      <ColorPicker.Trigger>
        <ColorSwatch size="lg" />
        <Label>Pick a color</Label>
      </ColorPicker.Trigger>
      <ColorPicker.Popover class="max-w-62 gap-2">
        <ColorArea class="max-w-full" colorSpace="hsb" xChannel="saturation" yChannel="brightness">
          <ColorArea.Thumb />
        </ColorArea>
        <ColorSlider channel="hue" class="gap-1 px-1" colorSpace="hsb">
          <Label>Hue</Label>
          <ColorSlider.Output class="text-muted" />
          <ColorSlider.Track>
            <ColorSlider.Thumb />
          </ColorSlider.Track>
        </ColorSlider>
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
        <div class="grid w-full grid-cols-3 items-center gap-2">
          {colorChannelsByColorSpace[colorSpace.value].map(channel => <ColorField key={channel} aria-label={channel} channel={channel} colorSpace={colorSpace.value}>
              <ColorField.Group variant="secondary">
                <ColorField.Input />
              </ColorField.Group>
            </ColorField>)}
        </div>
      </ColorPicker.Popover>
    </ColorPicker>;
});
