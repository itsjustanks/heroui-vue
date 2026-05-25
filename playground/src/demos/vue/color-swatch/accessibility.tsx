import { ColorSwatch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-3">
      <ColorSwatch aria-label="Primary brand color" color="#0485F7" colorName="Ocean Blue" />
      <ColorSwatch aria-label="Error state color" color="#EF4444" colorName="Coral Red" />
      <ColorSwatch aria-label="Warning color" color="#F59E0B" colorName="Sunset Orange" />
    </div>);
