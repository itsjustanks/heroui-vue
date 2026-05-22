import { computed, defineComponent, inject, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { SliderRange as RekaSliderRange } from 'reka-ui'
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

    return () => (
      <RekaSliderRange
        {...attrs}
        data-slot="slider-fill"
        data-disabled={ctx?.isDisabled.value ? '' : undefined}
        style={props.style}
        class={cn((ctx?.slots.value ?? sliderVariants()).fill(), props.class)}
      />
    )
  }
})

export default SliderFill
