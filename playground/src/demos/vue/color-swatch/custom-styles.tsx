import { ColorSwatch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const colors = ["#0485F7", "#EF4444", "#F59E0B", "#10B981", "#D946EF"];
  return () => <div class="flex flex-col gap-8">
      {/* Glow effect */}
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Glow Effect</span>
        <div class="flex items-center gap-4">
          {colors.map(color => <ColorSwatch key={color} color={color} size="xl" style={() => ({
          boxShadow: `0 0 20px 2px ${color}`
        })} />)}
        </div>
      </div>

      {/* Gradient swatch */}
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Gradient</span>
        <div class="flex items-center gap-4">
          {colors.map(color => <ColorSwatch key={color} color={color} size="xl" style={({
          color: c
        }) => ({
          background: `linear-gradient(135deg, ${c.toString("css")}, white)`
        })} />)}
        </div>
      </div>
    </div>;
});
export default ColorSwatchCustomStyles;
