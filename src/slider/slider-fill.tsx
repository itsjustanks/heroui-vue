import { defineComponent, inject, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { sliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SLIDER_CONTEXT } from './slider-context'

/**
 * SliderFill — the coloured fill bar inside the track (HeroUI `slider__fill`).
 * Faithful Vue port of HeroUI v3 `SliderFill`.
 * Built over reka-ui `SliderRange`.
 */
export const SliderFill = defineComponent({
  name: 'SliderFill',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    style: { type: Object as PropType<CSSProperties>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(SLIDER_CONTEXT, null)

    return () => {
      const values = ctx?.modelValue.value ?? []
      const min = ctx?.min.value ?? 0
      const max = ctx?.max.value ?? 100
      const span = max - min || 1
      const percentages = values.map((value) => ((value - min) / span) * 100).sort((a, b) => a - b)
      const start = percentages.length > 1 ? (percentages[0] ?? 0) : 0
      const end = percentages[percentages.length - 1] ?? 0
      const isVertical = ctx?.orientation.value === 'vertical'

      return (
        <div
          {...attrs}
          data-slot="slider-fill"
          data-disabled={ctx?.isDisabled.value ? 'true' : undefined}
          style={{
            ...props.style,
            [isVertical ? 'bottom' : 'left']: `${start}%`,
            [isVertical ? 'height' : 'width']: `${end - start}%`
          }}
          class={cn((ctx?.slots.value ?? sliderVariants()).fill(), props.class)}
        />
      )
    }
  }
})

export default SliderFill
