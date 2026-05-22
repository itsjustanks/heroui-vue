import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogDialog — Vue port of HeroUI v3 `AlertDialogDialog`.
 *
 * The inner card element (`role="alertdialog"`) that sits inside the container.
 * Reads `placement` from context to forward as `data-placement`.
 */
export const AlertDialogDialog = defineComponent({
  name: 'AlertDialogDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? alertDialogVariants()
      const placement = ctx?.placement.value

      return (
        <div
          {...attrs}
          data-slot="alert-dialog-dialog"
          data-placement={placement}
          role="alertdialog"
          class={cn(s.dialog(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default AlertDialogDialog
