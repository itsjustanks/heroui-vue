import { defineComponent } from 'vue'
import { MenubarMenu as RekaMenubarMenu } from 'reka-ui'

/** MenubarMenu — a single menu within the bar (trigger + content); renders no DOM. */
export const MenubarMenu = defineComponent({
  name: 'MenubarMenu',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaMenubarMenu {...attrs}>{slots.default?.()}</RekaMenubarMenu>
  }
})

export default MenubarMenu
