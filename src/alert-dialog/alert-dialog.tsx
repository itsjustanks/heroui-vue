import { computed, defineComponent, provide, type PropType } from 'vue'
import { AlertDialogRoot as RekaAlertDialogRoot, AlertDialogTrigger as RekaAlertDialogTrigger } from 'reka-ui'
import { alertDialogVariants } from '@heroui/styles'
import { withAutoTrigger } from '@/lib/auto-trigger'
import { ALERT_DIALOG_CONTEXT } from './alert-dialog-context'

/**
 * AlertDialogRoot — Vue port of HeroUI v3 `AlertDialogRoot`.
 *
 * Renders no DOM — wraps reka-ui `AlertDialogRoot` for headless behaviour
 * (focus trap, scroll lock). Computes `alertDialogVariants` and provides
 * the slot map + placement state to all compound parts.
 *
 * Like HeroUI v3, the FIRST child of `<AlertDialog>` is treated as the trigger
 * automatically — no explicit `<AlertDialog.Trigger>` wrapper required (though
 * `<AlertDialog.Trigger>` still works for back-compat).
 */
export const AlertDialogRoot = defineComponent({
  name: 'AlertDialog',
  inheritAttrs: false,
  props: {
    isDismissable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isKeyboardDismissDisabled: { type: Boolean as PropType<boolean | undefined>, default: undefined }
  },
  setup (_props, { attrs, slots }) {
    const styles = computed(() => alertDialogVariants())
    const placement = computed<'auto' | 'top' | 'center' | 'bottom'>(() => 'auto')
    provide(ALERT_DIALOG_CONTEXT, { slots: styles, placement })

    return () => (
      <RekaAlertDialogRoot {...attrs} data-slot="alert-dialog-root">
        {withAutoTrigger(slots.default?.(), RekaAlertDialogTrigger, 'AlertDialogTrigger')}
      </RekaAlertDialogRoot>
    )
  }
})

export default AlertDialogRoot
