import { defineComponent } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'

/** DrawerTrigger — opens the drawer. Pass `as-child` to use a custom element. */
export const DrawerTrigger = defineComponent({
  name: 'DrawerTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaDialogTrigger {...attrs}>{slots.default?.()}</RekaDialogTrigger>
  }
})

export default DrawerTrigger
