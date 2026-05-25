import type { Color } from "@itsjustanks/heroui-vue";
import { ColorField, ColorSwatch, Label, parseColor } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const color = ref(parseColor("#7F007F"));
  return () => <div class="flex flex-col gap-4">
      <p class="text-sm text-muted">Edit individual HSL channels:</p>
      <div class="flex gap-4">
        <ColorField channel="hue" class="w-[100px]" colorSpace="hsl" name="hue" value={color.value} onChange={setColor}>
          <Label>Hue</Label>
          <ColorField.Group>
            <ColorField.Input />
          </ColorField.Group>
        </ColorField>
        <ColorField channel="saturation" class="w-[100px]" colorSpace="hsl" name="saturation" value={color.value} onChange={setColor}>
          <Label>Saturation</Label>
          <ColorField.Group>
            <ColorField.Input />
            <ColorField.Suffix>
              <span class="text-sm text-muted">%</span>
            </ColorField.Suffix>
          </ColorField.Group>
        </ColorField>
        <ColorField channel="lightness" class="w-[100px]" colorSpace="hsl" name="lightness" value={color.value} onChange={setColor}>
          <Label>Lightness</Label>
          <ColorField.Group>
            <ColorField.Input />
            <ColorField.Suffix>
              <span class="text-sm text-muted">%</span>
            </ColorField.Suffix>
          </ColorField.Group>
        </ColorField>
      </div>
      <div class="flex items-center gap-2">
        <ColorSwatch color={color.value ?? undefined} size="md" />
        <span class="text-sm">Current: {color.value ? color.value.toString("hex") : "(empty)"}</span>
      </div>
    </div>;
});
