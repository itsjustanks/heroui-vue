import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogTitle as RekaAlertDialogTitle } from 'reka-ui'
import { alertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogHeading — Vue port of HeroUI v3 `AlertDialogHeading`.
 *
 * Uses reka-ui `AlertDialogTitle` for accessibility (announced as dialog title).
 * Renders `data-slot="alert-dialog-heading"`.
 */
export const AlertDialogHeading = defineComponent({
  name: 'AlertDialogHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? alertDialogVariants()

      return (
        <RekaAlertDialogTitle
          {...attrs}
          data-slot="alert-dialog-heading"
          class={cn(s.heading(), props.class)}
        >
          {slots.default?.()}
        </RekaAlertDialogTitle>
      )
    }
  }
})

export default AlertDialogHeading
