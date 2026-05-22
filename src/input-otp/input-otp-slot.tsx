import { computed, defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PinInputInput, injectPinInputRootContext } from 'reka-ui'
import { inputOTPVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { INPUT_OTP_CONTEXT } from './input-otp-context'

/**
 * InputOTPSlot — a single one-time-code segment (HeroUI `input-otp__slot`).
 * Faithful Vue port of HeroUI v3 `InputOTPSlot`.
 *
 * Nests:
 *   - `div[data-slot="input-otp-slot-value"]` — visible character when filled
 *   - `div[data-slot="input-otp-caret"]`      — blinking caret when active + empty
 *   - `PinInputInput`                          — the real `<input>` managed by reka-ui
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
    const ctx        = inject(INPUT_OTP_CONTEXT, null)
    const pinContext = injectPinInputRootContext()

    const char = computed<string>(() => {
      const val = pinContext?.currentModelValue.value[props.index]
      return val != null ? String(val) : ''
    })

    const isActive = computed<boolean>(() => {
      if (!pinContext?.inputElements?.value) return false
      const inputs = Array.from(pinContext.inputElements.value)
      const el = inputs[props.index]
      if (!el) return false
      return document.activeElement === el
    })

    const isFilled    = computed(() => char.value !== '')
    const isDisabled  = computed(() => ctx?.isDisabled.value ?? false)
    const isInvalid   = computed(() => ctx?.isInvalid.value ?? false)
    const showCaret   = computed(() => isActive.value && !isFilled.value)

    return () => {
      const slots = ctx?.slots.value ?? inputOTPVariants()
      return (
        <div
          {...attrs}
          data-slot="input-otp-slot"
          data-active={isActive.value ? '' : undefined}
          data-filled={isFilled.value ? '' : undefined}
          data-disabled={isDisabled.value ? '' : undefined}
          data-invalid={isInvalid.value ? '' : undefined}
          class={cn(slots.slot(), props.class)}
        >
          {isFilled.value
            ? <div data-slot="input-otp-slot-value" class={slots.slotValue()}>{char.value}</div>
            : null}
          {showCaret.value
            ? <div data-slot="input-otp-caret" class={slots.caret()} />
            : null}
          <PinInputInput index={props.index} class="sr-only" />
        </div>
      )
    }
  }
})

export default InputOTPSlot
