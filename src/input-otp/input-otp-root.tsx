import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { PinInputRoot } from 'reka-ui'
import { inputOTPVariants, type InputOTPVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_OTP_CONTEXT } from './input-otp-context'

/**
 * InputOTPRoot — segmented one-time-passcode input. Faithful Vue port of HeroUI v3 `InputOTP`.
 *
 * Built over reka-ui `PinInputRoot` which owns keyboard/clipboard/autofill behaviour.
 * Computes HeroUI's `inputOTPVariants` slot map and provides it plus `isDisabled`/`isInvalid`
 * state to compound parts (`InputOTP.Group`, `.Slot`, `.Separator`).
 */
export const InputOTPRoot = defineComponent({
  name: 'InputOTP',
  inheritAttrs: false,
  props: {
    class:      { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant:    { type: String as PropType<InputOTPVariants['variant']>, default: 'primary' },
    /** When `true`, the input is non-interactive. */
    isDisabled: { type: Boolean, default: false },
    /** When `true`, slots render in the invalid state. */
    isInvalid:  { type: Boolean, default: false },
    inputClassName: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    validationDetails: { type: Object as PropType<unknown>, default: undefined },
    validationErrors: { type: Array as PropType<unknown[]>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles    = computed(() => inputOTPVariants({ variant: props.variant }))
    const isDisabled = computed(() => props.isDisabled)
    const isInvalid  = computed(() => props.isInvalid)

    provide(INPUT_OTP_CONTEXT, { slots: styles, isDisabled, isInvalid })

    return () => (
      <PinInputRoot
        {...attrs}
        disabled={props.isDisabled}
        data-slot="input-otp"
        data-disabled={props.isDisabled ? '' : undefined}
        data-invalid={props.isInvalid ? '' : undefined}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </PinInputRoot>
    )
  }
})

export default InputOTPRoot
