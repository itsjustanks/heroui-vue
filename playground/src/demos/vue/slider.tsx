import { Label, Slider } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';
import { defineComponent } from "vue";
export default defineComponent(() => {
  const example = currentExample('default');
  const vertical = example === 'vertical';
  const range = example === 'range';
  return () => <div class="demo-row">
      <Slider class={vertical ? 'h-48' : 'w-full max-w-xs'} defaultValue={range ? [25, 65] : 30} orientation={vertical ? 'vertical' : 'horizontal'} isDisabled={example === 'disabled'}>
        <Label>Volume</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb />
          {range && <Slider.Thumb />}
        </Slider.Track>
      </Slider>
    </div>;
});
