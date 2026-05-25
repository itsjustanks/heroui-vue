import { ColorArea, ColorPicker, ColorSlider, ColorSwatch, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ColorPicker defaultValue="#0485F7">
      <ColorPicker.Trigger>
        <ColorSwatch size="lg" />
        <Label>Pick a color</Label>
      </ColorPicker.Trigger>
      <ColorPicker.Popover>
        <ColorArea aria-label="Color area" class="max-w-full" colorSpace="hsb" xChannel="saturation" yChannel="brightness">
          <ColorArea.Thumb />
        </ColorArea>
        <ColorSlider channel="hue" class="gap-1 px-1" colorSpace="hsb">
          <Label>Hue</Label>
          <ColorSlider.Output class="text-muted" />
          <ColorSlider.Track>
            <ColorSlider.Thumb />
          </ColorSlider.Track>
        </ColorSlider>
      </ColorPicker.Popover>
    </ColorPicker>);
