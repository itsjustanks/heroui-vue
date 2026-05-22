import { defineComponent } from 'vue'
import { MenubarRadioGroup as RekaMenubarRadioGroup } from 'reka-ui'

/** MenubarRadioGroup — single-selection group for radio items. */
export const MenubarRadioGroup = defineComponent({
  name: 'MenubarRadioGroup',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaMenubarRadioGroup {...attrs}>{slots.default?.()}</RekaMenubarRadioGroup>
  }
})

export default MenubarRadioGroup
