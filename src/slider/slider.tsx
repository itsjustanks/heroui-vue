import { computed, defineComponent, provide, ref, type HTMLAttributes, type PropType } from 'vue'
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
    defaultValue: { type: [Array, Number] as PropType<number[] | number>, default: undefined },
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
    const normalizeValue = (value: number[] | number | undefined): number[] => {
      if (Array.isArray(value)) return value
      if (typeof value === 'number') return [value]
      return [props.min]
    }
    const localValue  = ref<number[]>(normalizeValue(props.defaultValue))
    const modelValue  = computed(() => props.modelValue ?? localValue.value)
    const min         = computed(() => props.min)
    const max         = computed(() => props.max)
    const orientation = computed(() => props.orientation)
    const isDisabled  = computed(() => props.disabled)

    provide(SLIDER_CONTEXT, { slots: styles, modelValue, min, max, orientation, isDisabled })

    return () => (
      <RekaSliderRoot
        {...attrs}
        as="div"
        modelValue={props.modelValue}
        defaultValue={normalizeValue(props.defaultValue)}
        min={props.min}
        max={props.max}
        orientation={props.orientation}
        disabled={props.disabled}
        data-slot="slider"
        class={cn(styles.value.base(), props.class)}
        onUpdate:modelValue={(v: number[] | undefined) => {
          localValue.value = v ?? []
          emit('update:modelValue', v ?? [])
        }}
      >
        {slots.default?.()}
      </RekaSliderRoot>
    )
  }
})

export default SliderRoot
