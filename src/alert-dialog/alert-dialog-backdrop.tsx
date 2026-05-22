import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogOverlay, AlertDialogPortal } from 'reka-ui'
import { alertDialogVariants, type AlertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogBackdrop — Vue port of HeroUI v3 `AlertDialogBackdrop`.
 *
 * Wraps the alert dialog in a portal + full-screen overlay. The `variant`
 * prop controls the backdrop appearance (`opaque` | `blur` | `transparent`).
 * Merges variant-specific slots back into context for nested parts.
 *
 * Defaults align with HeroUI: `isDismissable=false`, keyboard dismiss disabled.
 */
export const AlertDialogBackdrop = defineComponent({
  name: 'AlertDialogBackdrop',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Controls backdrop blur/opacity. @default 'opaque' */
    variant: { type: String as PropType<AlertDialogVariants['variant']>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    // Merge variant-specific slots over the root slots (mirrors React implementation)
    const mergedSlots = computed(() => {
      const base = ctx?.slots.value ?? alertDialogVariants()
      const withVariant = alertDialogVariants({ variant: props.variant })
      return { ...base, ...withVariant }
    })

    // Always re-provide updated context so Container/Dialog/etc. receive variant slots
    const fallbackPlacement = computed<'auto' | 'top' | 'center' | 'bottom'>(() => 'auto')
    provide(ALERT_DIALOG_CONTEXT, {
      slots: mergedSlots,
      placement: ctx?.placement ?? fallbackPlacement
    })

    return () => {
      const s = mergedSlots.value

      return (
        <AlertDialogPortal>
          <AlertDialogOverlay
            {...attrs}
            data-slot="alert-dialog-backdrop"
            class={cn(s.backdrop(), props.class)}
          >
            {slots.default?.()}
          </AlertDialogOverlay>
        </AlertDialogPortal>
      )
    }
  }
})

export default AlertDialogBackdrop
