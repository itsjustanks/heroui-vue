import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { SliderTrack as RekaSliderTrack } from 'reka-ui'
import { sliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SLIDER_CONTEXT } from './slider-context'

/**
 * SliderTrack — the rail the fill and thumbs sit on (HeroUI `slider__track`).
 * Faithful Vue port of HeroUI v3 `SliderTrack`.
 * Built over reka-ui `SliderTrack`.
 */
export const SliderTrack = defineComponent({
  name: 'SliderTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SLIDER_CONTEXT, null)
    return () => (
      <RekaSliderTrack
        {...attrs}
        data-slot="slider-track"
        data-disabled={ctx?.isDisabled.value ? '' : undefined}
        class={cn((ctx?.slots.value ?? sliderVariants()).track(), props.class)}
      >
        {slots.default?.()}
      </RekaSliderTrack>
    )
  }
})

export default SliderTrack
