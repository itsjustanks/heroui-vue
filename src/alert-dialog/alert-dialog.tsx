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
    open: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    modelValue: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    defaultOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    onOpenChange: { type: Function as PropType<(open: boolean) => void>, default: undefined },
    isDismissable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isKeyboardDismissDisabled: { type: Boolean as PropType<boolean | undefined>, default: undefined }
  },
  emits: {
    'update:open': (_open: boolean) => true,
    'update:modelValue': (_open: boolean) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => alertDialogVariants())
    const placement = computed<'auto' | 'top' | 'center' | 'bottom'>(() => 'auto')
    provide(ALERT_DIALOG_CONTEXT, { slots: styles, placement })

    const handleOpenChange = (open: boolean) => {
      props.onOpenChange?.(open)
      emit('update:open', open)
      emit('update:modelValue', open)
    }

    return () => {
      const controlledOpen = props.open ?? props.modelValue

      return (
        <RekaAlertDialogRoot
          {...attrs}
          data-slot="alert-dialog-root"
          open={controlledOpen}
          defaultOpen={props.defaultOpen}
          onUpdate:open={handleOpenChange}
        >
          {withAutoTrigger(slots.default?.(), RekaAlertDialogTrigger, 'AlertDialogTrigger')}
        </RekaAlertDialogRoot>
      )
    }
  }
})

export default AlertDialogRoot
