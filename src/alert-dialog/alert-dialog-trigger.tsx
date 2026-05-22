import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogTrigger as RekaAlertDialogTrigger } from 'reka-ui'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogTrigger — Vue port of HeroUI v3 `AlertDialogTrigger`.
 *
 * Renders `data-slot="alert-dialog-trigger"` with the `alert-dialog__trigger`
 * class. Wraps the child in reka-ui `AlertDialogTrigger` for open/close behaviour.
 */
export const AlertDialogTrigger = defineComponent({
  name: 'AlertDialogTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? alertDialogVariants()

      return (
        <RekaAlertDialogTrigger {...attrs}>
          <div
            data-slot="alert-dialog-trigger"
            class={cn(s.trigger(), props.class)}
          >
            {slots.default?.()}
          </div>
        </RekaAlertDialogTrigger>
      )
    }
  }
})

export default AlertDialogTrigger
