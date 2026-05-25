import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * ErrorMessageRoot — low-level error message primitive. Faithful Vue port of
 * HeroUI v3 `ErrorMessage` (renders always, unlike `FieldError` which gates on
 * an `errors` array).
 */
export const ErrorMessageRoot = defineComponent({
  name: 'ErrorMessage',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        role="alert"
        data-slot="error-message"
        class={cn('error-message', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ErrorMessageRoot
