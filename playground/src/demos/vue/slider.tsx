import { defineComponent } from 'vue'
import { Label, Slider } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-row">
    <Slider class="w-full max-w-xs" defaultValue={[30]}>
      <Label>Volume</Label>
      <Slider.Output />
      <Slider.Track>
        <Slider.Fill />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>
  </div>
))
