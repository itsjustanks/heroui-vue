import { Label, Slider } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Slider class="w-full max-w-xs" defaultValue={30} render={props => <div {...props} data-custom="foo" />}>
      <Label>Volume</Label>
      <Slider.Output />
      <Slider.Track>
        <Slider.Fill />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>);
