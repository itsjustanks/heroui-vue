import { defineComponent } from 'vue'
import { DropdownMenuGroup as RekaDropdownMenuGroup } from 'reka-ui'

/** DropdownMenuGroup — groups related items for accessibility; renders no DOM. */
export const DropdownMenuGroup = defineComponent({
  name: 'DropdownMenuGroup',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaDropdownMenuGroup {...attrs}>{slots.default?.()}</RekaDropdownMenuGroup>
  }
})

export default DropdownMenuGroup
