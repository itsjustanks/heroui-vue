import { defineComponent } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'

/** ModalTrigger — opens the modal. Pass `as-child` to use a custom element. */
export const ModalTrigger = defineComponent({
  name: 'ModalTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaDialogTrigger {...attrs}>{slots.default?.()}</RekaDialogTrigger>
  }
})

export default ModalTrigger
