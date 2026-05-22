import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { alertVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_CONTEXT } from './alert-context'

/**
 * Alert.Description — muted body text (HeroUI `alert__description`).
 * Renders as `<span>` to match the HeroUI React source.
 */
export const AlertDescription = defineComponent({
  name: 'AlertDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="alert-description"
        class={cn((ctx?.slots.value ?? alertVariants()).description(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default AlertDescription
