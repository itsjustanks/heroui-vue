import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * InputOTPGroup — visual cluster of adjacent OTP slots.
 *
 * Faithful port of HeroUI v3 `InputOTPGroup`: a plain flex container that groups
 * `InputOTPSlot`s so a `InputOTPSeparator` can sit between groups.
 */
export const InputOTPGroup = defineComponent({
  name: 'InputOTPGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="input-otp-group"
        class={cn('flex items-center gap-2', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputOTPGroup
