import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import {
  AlertDialogContent as RekaAlertDialogContent,
  AlertDialogOverlay,
  AlertDialogPortal
} from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AlertDialogContent — portal, backdrop, container, and dialog.
 *
 * HeroUI BEM slots:
 *   `alert-dialog__backdrop` — full-screen overlay (opaque variant by default)
 *   `alert-dialog__container` — flex positioning wrapper
 *   `alert-dialog__dialog` — the card (md size by default)
 *
 * Size prop maps to `alert-dialog__dialog--{size}` modifiers.
 * Backdrop variant prop maps to `alert-dialog__backdrop--{variant}` modifiers.
 */
export const AlertDialogContent = defineComponent({
  name: 'AlertDialogContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: { type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'cover'>, default: 'md' },
    backdropVariant: { type: String as PropType<'opaque' | 'blur' | 'transparent'>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <AlertDialogPortal>
        <AlertDialogOverlay class={cn('alert-dialog__backdrop', `alert-dialog__backdrop--${props.backdropVariant}`)} />
        <div class="alert-dialog__container">
          <RekaAlertDialogContent
            {...attrs}
            class={cn('alert-dialog__dialog', `alert-dialog__dialog--${props.size}`, props.class)}
          >
            {slots.default?.()}
          </RekaAlertDialogContent>
        </div>
      </AlertDialogPortal>
    )
  }
})

export default AlertDialogContent
