import { HeartFill } from "../../../gravity-icons-vue";
import { ColorSwatchPicker } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const colors = ["#F43F5E", "#D946EF", "#8B5CF6", "#3B82F6", "#06B6D4", "#10B981", "#84CC16"];
  return () => <ColorSwatchPicker>
      {colors.map(color => <ColorSwatchPicker.Item key={color} color={color}>
          <ColorSwatchPicker.Swatch />
          <ColorSwatchPicker.Indicator>
            <HeartFill />
          </ColorSwatchPicker.Indicator>
        </ColorSwatchPicker.Item>)}
    </ColorSwatchPicker>;
});
export default CustomIndicator;
