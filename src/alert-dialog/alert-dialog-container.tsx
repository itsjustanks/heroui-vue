import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogContent as RekaAlertDialogContent } from 'reka-ui'
import { alertDialogVariants, type AlertDialogVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogContainer — Vue port of HeroUI v3 `AlertDialogContainer`.
 *
 * The flex positioning wrapper (ModalPrimitive in React) that sits inside the
 * backdrop. The `size` prop merges size-specific variant slots into context.
 * The `placement` prop is forwarded as `data-placement` and re-provided to
 * `AlertDialogDialog` so it can forward it too.
 *
 * Uses reka-ui `AlertDialogContent` as the container element (provides focus
 * trap + scroll lock at this level).
 */
export const AlertDialogContainer = defineComponent({
  name: 'AlertDialogContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Dialog size variant. @default 'md' */
    size: { type: String as PropType<AlertDialogVariants['size']>, default: 'md' },
    /** Screen placement of the dialog. @default 'auto' */
    placement: { type: String as PropType<'auto' | 'top' | 'center' | 'bottom'>, default: 'auto' }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ALERT_DIALOG_CONTEXT, null)

    // Merge size-specific slots over existing context slots
    const mergedSlots = computed(() => {
      const base = ctx?.slots.value ?? alertDialogVariants()
      const withSize = alertDialogVariants({ size: props.size })
      return { ...base, ...withSize }
    })

    const placementRef = computed<'auto' | 'top' | 'center' | 'bottom'>(() => props.placement)

    // Always re-provide updated context with placement so Dialog can read it
    provide(ALERT_DIALOG_CONTEXT, {
      slots: mergedSlots,
      placement: placementRef
    })

    return () => {
      const s = mergedSlots.value

      return (
        <RekaAlertDialogContent
          {...attrs}
          data-slot="alert-dialog-container"
          data-placement={props.placement}
          class={cn(s.container(), props.class)}
        >
          {slots.default?.()}
        </RekaAlertDialogContent>
      )
    }
  }
})

export default AlertDialogContainer
