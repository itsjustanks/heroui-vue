import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { sliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SLIDER_CONTEXT } from './slider-context'

/**
 * SliderOutput — displays the current value(s) (HeroUI `slider__output`).
 * Faithful Vue port of HeroUI v3 `SliderOutput`.
 * Defaults to showing all thumb values joined by " – ".
 */
export const SliderOutput = defineComponent({
  name: 'SliderOutput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SLIDER_CONTEXT, null)
    return () => {
      const slotStyles = ctx?.slots.value ?? sliderVariants()
      const values = ctx?.modelValue.value ?? []
      return (
        <output
          {...attrs}
          data-slot="slider-output"
          class={cn(slotStyles.output(), props.class)}
        >
          {slots.default ? slots.default() : values.join(' – ')}
        </output>
      )
    }
  }
})

export default SliderOutput
