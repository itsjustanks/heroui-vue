import { ColorSlider, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ColorSlider channel="alpha" class="w-full max-w-xs" defaultValue="hsla(0, 100%, 50%, 0.5)">
      <Label>Alpha</Label>
      <ColorSlider.Output />
      <ColorSlider.Track>
        <ColorSlider.Thumb />
      </ColorSlider.Track>
    </ColorSlider>);
