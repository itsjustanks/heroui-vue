import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { sliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SLIDER_CONTEXT } from './slider-context'

/**
 * SliderMarks — tick marks along the track (HeroUI `slider__marks`).
 * Faithful Vue port of HeroUI v3 `SliderMarks`.
 */
export const SliderMarks = defineComponent({
  name: 'SliderMarks',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SLIDER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="slider-marks"
        class={cn((ctx?.slots.value ?? sliderVariants()).marks(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default SliderMarks
