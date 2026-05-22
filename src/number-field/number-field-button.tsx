import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Minus as IconMinus, Plus as IconPlus } from 'lucide-vue-next'
import { NumberFieldDecrement, NumberFieldIncrement } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * NumberFieldDecrementButton — the minus stepper button. HeroUI v3
 * `NumberField.DecrementButton`. Renders reka-ui `NumberFieldDecrement` (the
 * leftmost `40px` column of `NumberFieldGroup`'s grid); a default minus icon is
 * used when no children are provided. Adapts the `rounded-l-md border-r`
 * treatment from HeroUI's BEM.
 */
export const NumberFieldDecrementButton = defineComponent({
  name: 'NumberFieldDecrementButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <NumberFieldDecrement
        {...attrs}
        aria-label="Decrease"
        data-slot="number-field-decrement-button"
        class={cn('number-field__decrement-button', props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconMinus data-slot="number-field-decrement-button-icon" aria-hidden="true" />}
      </NumberFieldDecrement>
    )
  }
})

/**
 * NumberFieldIncrementButton — the plus stepper button. HeroUI v3
 * `NumberField.IncrementButton`. Renders reka-ui `NumberFieldIncrement` (the
 * rightmost `40px` column of `NumberFieldGroup`'s grid); a default plus icon is
 * used when no children are provided. Adapts the `rounded-r-md border-l`
 * treatment from HeroUI's BEM.
 */
export const NumberFieldIncrementButton = defineComponent({
  name: 'NumberFieldIncrementButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <NumberFieldIncrement
        {...attrs}
        aria-label="Increase"
        data-slot="number-field-increment-button"
        class={cn('number-field__increment-button', props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconPlus data-slot="number-field-increment-button-icon" aria-hidden="true" />}
      </NumberFieldIncrement>
    )
  }
})

export default NumberFieldIncrementButton
