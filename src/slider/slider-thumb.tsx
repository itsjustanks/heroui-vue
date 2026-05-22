import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { SliderThumb as RekaSliderThumb } from 'reka-ui'
import { sliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SLIDER_CONTEXT } from './slider-context'

/**
 * SliderThumb — the draggable handle (HeroUI `slider__thumb`).
 * Faithful Vue port of HeroUI v3 `SliderThumb`.
 * Built over reka-ui `SliderThumb`.
 */
export const SliderThumb = defineComponent({
  name: 'SliderThumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SLIDER_CONTEXT, null)
    return () => (
      <RekaSliderThumb
        {...attrs}
        data-slot="slider-thumb"
        class={cn((ctx?.slots.value ?? sliderVariants()).thumb(), props.class)}
      >
        {slots.default?.()}
      </RekaSliderThumb>
    )
  }
})

export default SliderThumb
