import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * InputOTPSeparator — a small divider between OTP slot groups.
 *
 * Faithful port of HeroUI v3 `InputOTPSeparator` (`input-otp__separator`): a
 * short, rounded dash. A child overrides the default dash (e.g. an icon).
 */
export const InputOTPSeparator = defineComponent({
  name: 'InputOTPSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} data-slot="input-otp-separator" role="separator">
        {slots.default
          ? slots.default()
          : <div class={cn('h-0.5 w-1.5 shrink-0 rounded-sm bg-border', props.class)} />}
      </div>
    )
  }
})

export default InputOTPSeparator
