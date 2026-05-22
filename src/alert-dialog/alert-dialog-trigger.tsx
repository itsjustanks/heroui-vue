import { defineComponent } from 'vue'
import { AlertDialogTrigger as RekaAlertDialogTrigger } from 'reka-ui'

/** AlertDialogTrigger — opens the alert-dialog. Pass `as-child` to use a custom element. */
export const AlertDialogTrigger = defineComponent({
  name: 'AlertDialogTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaAlertDialogTrigger {...attrs}>{slots.default?.()}</RekaAlertDialogTrigger>
  }
})

export default AlertDialogTrigger
