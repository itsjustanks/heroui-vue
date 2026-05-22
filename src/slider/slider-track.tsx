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
    return () => {
      const values = ctx?.modelValue.value ?? []
      const min = ctx?.min.value ?? 0
      const max = ctx?.max.value ?? 100
      const span = max - min || 1
      const percentages = values.map((value) => ((value - min) / span) * 100).sort((a, b) => a - b)
      const singleThumb = percentages.length <= 1
      const start = singleThumb ? 0 : (percentages[0] ?? 0)
      const end = percentages[percentages.length - 1] ?? 0
      const fillWidth = end - start

      return (
        <RekaSliderTrack
          {...attrs}
          as="div"
          data-slot="slider-track"
          data-disabled={ctx?.isDisabled.value ? 'true' : undefined}
          data-fill-start={singleThumb ? (fillWidth > 0 ? 'true' : undefined) : (start === 0 ? 'true' : undefined)}
          data-fill-end={singleThumb ? (fillWidth === 100 ? 'true' : undefined) : (start + fillWidth === 100 ? 'true' : undefined)}
          class={cn((ctx?.slots.value ?? sliderVariants()).track(), props.class)}
        >
          {slots.default?.()}
        </RekaSliderTrack>
      )
    }
  }
})

export default SliderTrack
