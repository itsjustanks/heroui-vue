import { computed, defineComponent, provide, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { SliderRoot as RekaSliderRoot } from 'reka-ui'
import { sliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SLIDER_CONTEXT } from './slider-context'

/**
 * SliderRoot — the range-input container. Faithful Vue port of HeroUI v3 `Slider`.
 *
 * Built over reka-ui `SliderRoot` which owns keyboard stepping, ARIA and form
 * integration. Computes HeroUI's `sliderVariants` slot map and provides it plus
 * reactive state to compound parts (`Slider.Output`, `.Track`, `.Fill`, `.Thumb`, `.Marks`).
 */
export const SliderRoot = defineComponent({
  name: 'Slider',
  inheritAttrs: false,
  props: {
    class:       { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    modelValue:  { type: Array as PropType<number[]>, default: undefined },
    /** Minimum value of the range. @default 0 */
    min:         { type: Number, default: 0 },
    /** Maximum value of the range. @default 100 */
    max:         { type: Number, default: 100 },
    /** Slider orientation. @default 'horizontal' */
    orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    /** When `true`, prevents interaction. */
    disabled:    { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup (props, { attrs, emit, slots }) {
    const styles      = computed(() => sliderVariants({}))
    const modelValue  = computed(() => props.modelValue ?? [])
    const min         = computed(() => props.min)
    const max         = computed(() => props.max)
    const orientation = computed(() => props.orientation)
    const isDisabled  = computed(() => props.disabled)

    provide(SLIDER_CONTEXT, { slots: styles, modelValue, min, max, orientation, isDisabled })

    return () => (
      <RekaSliderRoot
        {...attrs}
        modelValue={props.modelValue}
        min={props.min}
        max={props.max}
        orientation={props.orientation}
        disabled={props.disabled}
        data-slot="slider"
        class={cn(styles.value.base(), props.class)}
        onUpdate:modelValue={(v: number[] | undefined) => emit('update:modelValue', v ?? [])}
      >
        {slots.default?.()}
      </RekaSliderRoot>
    )
  }
})

export default SliderRoot
