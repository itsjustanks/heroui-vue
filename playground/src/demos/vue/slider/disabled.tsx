import { Label, Slider } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Slider isDisabled class="w-full max-w-xs" defaultValue={30}>
      <Label>Volume</Label>
      <Slider.Output />
      <Slider.Track>
        <Slider.Fill />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>);
