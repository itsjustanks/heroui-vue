import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Minus as IconMinus, Plus as IconPlus } from 'lucide-vue-next'
import { NumberFieldDecrement, NumberFieldIncrement } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Shared stepper-button styling. Adapts HeroUI's `number-field__increment-button`
 * / `number-field__decrement-button` BEM: a full-height `w-10` cell,
 * `bg-transparent`, pressed `scale-[0.97]`, `active:bg-foreground/10`, with a
 * hairline divider against the input. reka-ui's `NumberFieldIncrement` /
 * `NumberFieldDecrement` own the press + auto-disable behaviour
 * (`data-disabled` at the bounds).
 */
const numberFieldButtonClass = cn(
  'flex h-full w-10 items-center justify-center bg-transparent p-0 text-foreground outline-none',
  'transition-[background-color,transform] active:scale-[0.97] active:bg-foreground/10',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  'disabled:pointer-events-none disabled:opacity-50',
  'motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0'
)

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
        class={cn(numberFieldButtonClass, 'rounded-l-md rounded-r-none border-r border-input', props.class)}
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
        class={cn(numberFieldButtonClass, 'rounded-l-none rounded-r-md border-l border-input', props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconPlus data-slot="number-field-increment-button-icon" aria-hidden="true" />}
      </NumberFieldIncrement>
    )
  }
})

export default NumberFieldIncrementButton
