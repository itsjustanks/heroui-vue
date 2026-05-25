import { ColorSwatchPicker } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
const colors = ["#F43F5E", "#D946EF", "#8B5CF6", "#3B82F6", "#06B6D4", "#10B981", "#84CC16"];
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      {sizes.map(size => <div key={size} class="flex items-center gap-4">
          <span class="w-8 text-sm text-muted">{size}</span>
          <ColorSwatchPicker size={size}>
            {colors.map(color => <ColorSwatchPicker.Item key={color} color={color}>
                <ColorSwatchPicker.Swatch />
                <ColorSwatchPicker.Indicator />
              </ColorSwatchPicker.Item>)}
          </ColorSwatchPicker>
        </div>)}
    </div>);
