import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogCancel as RekaAlertDialogCancel } from 'reka-ui'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogCloseTrigger — Vue port of HeroUI v3 `AlertDialogCloseTrigger`.
 *
 * Renders a close button styled with `alert-dialog__close-trigger`.
 * Uses reka-ui `AlertDialogCancel` for the close behaviour.
 * Renders `data-slot="alert-dialog-close-trigger"`.
 */
export const AlertDialogCloseTrigger = defineComponent({
  name: 'AlertDialogCloseTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? alertDialogVariants()

      return (
        <RekaAlertDialogCancel
          {...attrs}
          data-slot="alert-dialog-close-trigger"
          class={cn(s.closeTrigger(), props.class)}
        >
          {slots.default?.()}
        </RekaAlertDialogCancel>
      )
    }
  }
})

export default AlertDialogCloseTrigger
