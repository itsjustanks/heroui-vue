import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { alertVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_CONTEXT } from './alert-context'

/** Alert.Content — the text content wrapper (HeroUI `alert__content`). */
export const AlertContent = defineComponent({
  name: 'AlertContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="alert-content"
        class={cn((ctx?.slots.value ?? alertVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertContent
