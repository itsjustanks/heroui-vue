import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { NumberFieldDecrement, NumberFieldIncrement } from 'reka-ui'
import { numberFieldVariants } from '@heroui/styles'
import { IconMinus, IconPlus } from '@/icons'
import { cn } from '@/lib/utils'
import { NUMBER_FIELD_CONTEXT } from './number-field-context'

/**
 * NumberFieldIncrementButton — the plus stepper (HeroUI `number-field__increment-button`).
 * Faithful Vue port of HeroUI v3 `NumberFieldIncrementButton`.
 * Built over reka-ui `NumberFieldIncrement`.
 */
export const NumberFieldIncrementButton = defineComponent({
  name: 'NumberFieldIncrementButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(NUMBER_FIELD_CONTEXT, null)
    return () => (
      <NumberFieldIncrement
        {...attrs}
        aria-label="Increase"
        data-slot="number-field-increment-button"
        class={cn((ctx?.slots.value ?? numberFieldVariants()).incrementButton(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconPlus data-slot="number-field-increment-button-icon" aria-hidden="true" />}
      </NumberFieldIncrement>
    )
  }
})

/**
 * NumberFieldDecrementButton — the minus stepper (HeroUI `number-field__decrement-button`).
 * Faithful Vue port of HeroUI v3 `NumberFieldDecrementButton`.
 * Built over reka-ui `NumberFieldDecrement`.
 */
export const NumberFieldDecrementButton = defineComponent({
  name: 'NumberFieldDecrementButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(NUMBER_FIELD_CONTEXT, null)
    return () => (
      <NumberFieldDecrement
        {...attrs}
        aria-label="Decrease"
        data-slot="number-field-decrement-button"
        class={cn((ctx?.slots.value ?? numberFieldVariants()).decrementButton(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconMinus data-slot="number-field-decrement-button-icon" aria-hidden="true" />}
      </NumberFieldDecrement>
    )
  }
})

export default NumberFieldIncrementButton
