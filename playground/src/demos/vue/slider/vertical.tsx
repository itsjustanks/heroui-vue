import { Label, Slider } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex h-64 items-center justify-center">
      <Slider class="h-full" defaultValue={30} orientation="vertical">
        <Label>Volume</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb />
        </Slider.Track>
      </Slider>
    </div>);
export default Vertical;
