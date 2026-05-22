import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import {
  AlertDialogContent as RekaAlertDialogContent,
  AlertDialogOverlay,
  AlertDialogPortal
} from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AlertDialogContent — the content box. Portals the alert-dialog, renders the
 * dim backdrop, and styles the focus-trapped `role=alertdialog` element.
 *
 * Restyled to HeroUI v3 modal taste (mirrors `heroui/modal`): `rounded-2xl`
 * surface, `bg-black/50` backdrop, `data-[state]` fade + zoom animation. Token
 * adapted (`bg-background`, `border-border`); reka-ui `data-state` selectors.
 */
export const AlertDialogContent = defineComponent({
  name: 'AlertDialogContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <AlertDialogPortal>
        <AlertDialogOverlay
          class={cn(
            'fixed inset-0 z-50 bg-black/50',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0'
          )}
        />
        <RekaAlertDialogContent
          {...attrs}
          class={cn(
            'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-2xl border border-border bg-background p-6 text-foreground shadow-lg outline-none',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            props.class
          )}
        >
          {slots.default?.()}
        </RekaAlertDialogContent>
      </AlertDialogPortal>
    )
  }
})

export default AlertDialogContent
