import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { inputOTPVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_OTP_CONTEXT } from './input-otp-context'

/**
 * InputOTPSeparator — a divider between OTP slot groups (HeroUI `input-otp__separator`).
 * Faithful Vue port of HeroUI v3 `InputOTPSeparator`.
 */
export const InputOTPSeparator = defineComponent({
  name: 'InputOTPSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(INPUT_OTP_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="input-otp-separator"
        role="separator"
        class={cn((ctx?.slots.value ?? inputOTPVariants()).separator(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputOTPSeparator
