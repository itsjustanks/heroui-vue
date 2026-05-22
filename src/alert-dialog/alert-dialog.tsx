import { computed, defineComponent, provide, ref } from 'vue'
import { AlertDialogRoot as RekaAlertDialogRoot } from 'reka-ui'
import { alertDialogVariants } from '@heroui/styles'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogRoot — Vue port of HeroUI v3 `AlertDialogRoot`.
 *
 * Renders no DOM — wraps reka-ui `AlertDialogRoot` for headless behaviour
 * (focus trap, scroll lock). Computes `alertDialogVariants` and provides
 * the slot map + placement state to all compound parts.
 */
export const AlertDialogRoot = defineComponent({
  name: 'AlertDialog',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    const styles = computed(() => alertDialogVariants())
    const placement = computed<'auto' | 'top' | 'center' | 'bottom'>(() => 'auto')
    provide(ALERT_DIALOG_CONTEXT, { slots: styles, placement })

    return () => (
      <RekaAlertDialogRoot {...attrs} data-slot="alert-dialog-root">
        {slots.default?.()}
      </RekaAlertDialogRoot>
    )
  }
})

export default AlertDialogRoot
