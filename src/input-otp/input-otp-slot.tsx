import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PinInputInput } from 'reka-ui'
import { cn } from '@/lib/utils'
import { useInputOTPContext } from './input-otp-context'
import { inputOTPSlotVariants } from './input-otp-variants'

/**
 * InputOTPSlot — a single one-time-code segment.
 *
 * Faithful port of HeroUI v3 `InputOTPSlot`. Wraps reka-ui `PinInputInput` —
 * the focusable cell at the given `index` — and styles it as HeroUI's bordered
 * field box. `variant`, disabled and invalid state are inherited from
 * `InputOTPRoot` via context; reka-ui drives the `data-*` active/filled state.
 */
export const InputOTPSlot = defineComponent({
  name: 'InputOTPSlot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Zero-based position of this slot within the code. */
    index: { type: Number, required: true }
  },
  setup (props, { attrs }) {
    const context = useInputOTPContext()

    return () => (
      <PinInputInput
        {...attrs}
        index={props.index}
        data-slot="input-otp-slot"
        data-invalid={context?.isInvalid.value ? '' : undefined}
        class={cn(
          inputOTPSlotVariants({ variant: context?.variant.value }),
          'text-center caret-foreground placeholder:text-muted-foreground/60',
          'data-[invalid]:border-destructive data-[invalid]:ring-destructive/30',
          'disabled:cursor-not-allowed',
          props.class
        )}
      />
    )
  }
})

export default InputOTPSlot
