import { defineComponent } from 'vue'
import { MenubarSub as RekaMenubarSub } from 'reka-ui'

/** MenubarSub — root of a nested submenu; renders no DOM. */
export const MenubarSub = defineComponent({
  name: 'MenubarSub',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaMenubarSub {...attrs}>{slots.default?.()}</RekaMenubarSub>
  }
})

export default MenubarSub
