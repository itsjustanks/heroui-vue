import { ColorSlider, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ColorSlider channel="hue" class="w-full max-w-xs" defaultValue="hsl(0, 100%, 50%)" render={props => <div {...props} data-custom="foo" />}>
      <Label>Hue</Label>
      <ColorSlider.Output />
      <ColorSlider.Track>
        <ColorSlider.Thumb />
      </ColorSlider.Track>
    </ColorSlider>);
