import { defineComponent } from 'vue'
import { DropdownMenuSub as RekaDropdownMenuSub } from 'reka-ui'

/** DropdownMenuSub — root of a nested submenu; renders no DOM. */
export const DropdownMenuSub = defineComponent({
  name: 'DropdownMenuSub',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaDropdownMenuSub {...attrs}>{slots.default?.()}</RekaDropdownMenuSub>
  }
})

export default DropdownMenuSub
