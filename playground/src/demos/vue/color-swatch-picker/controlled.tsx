import { ColorSwatchPicker, parseColor } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
const colors = ["#F43F5E", "#D946EF", "#8B5CF6", "#3B82F6", "#06B6D4", "#10B981", "#84CC16"];
export default defineComponent(() => {
  const value = ref(parseColor("#F43F5E"));
  return () => <div class="flex flex-col gap-4">
      <ColorSwatchPicker value={value.value} onChange={v => value.value = v}>
        {colors.map(color => <ColorSwatchPicker.Item key={color} color={color}>
            <ColorSwatchPicker.Swatch />
            <ColorSwatchPicker.Indicator />
          </ColorSwatchPicker.Item>)}
      </ColorSwatchPicker>
      <p class="text-sm text-muted">
        Selected: <span class="font-medium">{value.value.toString("hex")}</span>
      </p>
    </div>;
});
export default Controlled;
