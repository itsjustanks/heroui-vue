import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { inputOTPVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_OTP_CONTEXT } from './input-otp-context'

/**
 * InputOTPGroup — visual cluster of adjacent OTP slots (HeroUI `input-otp__group`).
 * Faithful Vue port of HeroUI v3 `InputOTPGroup`.
 */
export const InputOTPGroup = defineComponent({
  name: 'InputOTPGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(INPUT_OTP_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="input-otp-group"
        class={cn((ctx?.slots.value ?? inputOTPVariants()).group(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputOTPGroup
