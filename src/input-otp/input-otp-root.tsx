import { defineComponent, toRef, type HTMLAttributes, type PropType } from 'vue'
import { PinInputRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { provideInputOTPContext } from './input-otp-context'
import type { TInputOTPVariant } from './input-otp-variants'

/**
 * InputOTPRoot — HeroUI-Vue one-time-code input over reka-ui `PinInputRoot`.
 *
 * Faithful port of HeroUI v3 `InputOTPRoot`. reka-ui owns the segmented-input
 * behaviour — `v-model` (the code array), `mask`, `otp` autofill, `type`,
 * `placeholder`, `@complete`. This wrapper adds HeroUI's `variant` plus
 * `isInvalid` and shares them, with `disabled`, to slots via context.
 */
export const InputOTPRoot = defineComponent({
  name: 'InputOTPRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant shared with every slot. */
    variant: { type: String as PropType<TInputOTPVariant>, default: 'primary' },
    /** When `true`, the input is non-interactive. */
    disabled: { type: Boolean, default: false },
    /** When `true`, slots render in the invalid state. */
    isInvalid: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    provideInputOTPContext({
      variant: toRef(props, 'variant'),
      isDisabled: toRef(props, 'disabled'),
      isInvalid: toRef(props, 'isInvalid')
    })

    return () => (
      <PinInputRoot
        {...attrs}
        disabled={props.disabled}
        data-slot="input-otp"
        data-disabled={props.disabled ? '' : undefined}
        data-invalid={props.isInvalid ? '' : undefined}
        class={cn(
          'input-otp',
          props.variant === 'secondary' ? 'input-otp--secondary' : 'input-otp--primary',
          props.class
        )}
      >
        {slots.default?.()}
      </PinInputRoot>
    )
  }
})

export default InputOTPRoot
