import { defineComponent } from 'vue'
import { AlertDialogRoot } from 'reka-ui'

/**
 * AlertDialog — root of the HeroUI-Vue alert-dialog, over reka-ui
 * `AlertDialogRoot`. A modal interruption that must be explicitly confirmed or
 * dismissed (no light-dismiss). reka-ui carries the headless behaviour
 * (focus trap, scroll lock). Renders no DOM.
 *
 * Faithful port of `shadcn/alert-dialog`'s `AlertDialog`: all props/emits
 * (`open`, `defaultOpen`, `v-model:open`, `onUpdate:open`, …) fall through
 * unchanged via `attrs` to `AlertDialogRoot`.
 */
export const AlertDialog = defineComponent({
  name: 'AlertDialog',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <AlertDialogRoot {...attrs}>{slots.default?.()}</AlertDialogRoot>
  }
})

export default AlertDialog
