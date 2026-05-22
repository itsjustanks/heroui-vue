import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogDescription as RekaAlertDialogDescription } from 'reka-ui'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogBody — Vue port of HeroUI v3 `AlertDialogBody`.
 *
 * Uses reka-ui `AlertDialogDescription` for accessibility (muted body text,
 * announced as dialog description). Renders `data-slot="alert-dialog-body"`.
 */
export const AlertDialogBody = defineComponent({
  name: 'AlertDialogBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? alertDialogVariants()

      return (
        <RekaAlertDialogDescription
          {...attrs}
          data-slot="alert-dialog-body"
          class={cn(s.body(), props.class)}
        >
          {slots.default?.()}
        </RekaAlertDialogDescription>
      )
    }
  }
})

export default AlertDialogBody
