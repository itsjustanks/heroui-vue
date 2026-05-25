import { ColorSwatchPicker } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
const colors = ["#F43F5E", "#D946EF", "#8B5CF6", "#3B82F6", "#06B6D4", "#10B981", "#84CC16"];
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Circle (default)</span>
        <ColorSwatchPicker variant="circle">
          {colors.map(color => <ColorSwatchPicker.Item key={color} color={color}>
              <ColorSwatchPicker.Swatch />
              <ColorSwatchPicker.Indicator />
            </ColorSwatchPicker.Item>)}
        </ColorSwatchPicker>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Square</span>
        <ColorSwatchPicker variant="square">
          {colors.map(color => <ColorSwatchPicker.Item key={color} color={color}>
              <ColorSwatchPicker.Swatch />
              <ColorSwatchPicker.Indicator />
            </ColorSwatchPicker.Item>)}
        </ColorSwatchPicker>
      </div>
    </div>);
export default Variants;
