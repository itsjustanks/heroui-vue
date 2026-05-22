import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/** AlertDialogHeader — Vue port of HeroUI v3 `AlertDialogHeader`. Title + description stack. */
export const AlertDialogHeader = defineComponent({
  name: 'AlertDialogHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? alertDialogVariants()

      return (
        <div
          {...attrs}
          data-slot="alert-dialog-header"
          class={cn(s.header(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default AlertDialogHeader
