import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Slider — HeroUI-Vue primitive over reka-ui `SliderRoot`.
 *
 * Maps to HeroUI `slider` BEM classes: `slider` (root), `slider__track`,
 * `slider__fill`, `slider__thumb`. reka-ui sets `data-orientation` on the root
 * which HeroUI CSS already selects for horizontal/vertical layout.
 * One thumb is rendered per `modelValue` entry; all other props/emits forward via attrs.
 */
export const Slider = defineComponent({
  name: 'Slider',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    modelValue: { type: Array as PropType<number[]>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <SliderRoot
        {...attrs}
        modelValue={props.modelValue}
        class={cn('slider', props.class)}
      >
        <SliderTrack class="slider__track">
          <SliderRange class="slider__fill" />
        </SliderTrack>
        {(props.modelValue ?? []).map((_, key) => (
          <SliderThumb
            key={key}
            class="slider__thumb"
          />
        ))}
      </SliderRoot>
    )
  }
})

export default Slider
