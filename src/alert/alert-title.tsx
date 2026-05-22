import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { alertVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_CONTEXT } from './alert-context'

/**
 * Alert.Title — medium-weight label text (HeroUI `alert__title`).
 * Renders as `<p>` to match the HeroUI React source.
 */
export const AlertTitle = defineComponent({
  name: 'AlertTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_CONTEXT, null)
    return () => (
      <p
        {...attrs}
        data-slot="alert-title"
        class={cn((ctx?.slots.value ?? alertVariants()).title(), props.class)}
      >
        {slots.default?.()}
      </p>
    )
  }
})

export default AlertTitle
