import { defineComponent } from 'vue'
import { MenubarGroup as RekaMenubarGroup } from 'reka-ui'

/** MenubarGroup — groups related items for accessibility; renders no DOM. */
export const MenubarGroup = defineComponent({
  name: 'MenubarGroup',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaMenubarGroup {...attrs}>{slots.default?.()}</RekaMenubarGroup>
  }
})

export default MenubarGroup
