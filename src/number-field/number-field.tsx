import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { NumberFieldRoot as RekaNumberFieldRoot, useForwardPropsEmits } from 'reka-ui'
import type { NumberFieldRootProps } from 'reka-ui'
import { numberFieldVariants, type NumberFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { NUMBER_FIELD_CONTEXT } from './number-field-context'

/**
 * NumberFieldRoot — the numeric input wrapper. Faithful Vue port of HeroUI v3 `NumberField`.
 *
 * Built over reka-ui `NumberFieldRoot` which owns numeric model, min/max/step,
 * formatOptions, locale, keyboard stepping and form association.
 * Computes HeroUI's `numberFieldVariants` slot map and provides it to compound
 * parts (`NumberField.Group`, `.Input`, `.IncrementButton`, `.DecrementButton`).
 */
export const NumberFieldRoot = defineComponent({
  name: 'NumberField',
  inheritAttrs: false,
  props: {
    class:     { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant:   { type: String as PropType<NumberFieldVariants['variant']>, default: 'primary' },
    /** Stretch the field to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<boolean>, default: false }
  },
  emits: ['update:modelValue'],
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => numberFieldVariants({ variant: props.variant, fullWidth: props.fullWidth }))
    provide(NUMBER_FIELD_CONTEXT, { slots: styles })

    const forwarded = useForwardPropsEmits(attrs as NumberFieldRootProps, emit)

    return () => (
      <RekaNumberFieldRoot
        {...forwarded.value}
        data-slot="number-field"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaNumberFieldRoot>
    )
  }
})

export default NumberFieldRoot
