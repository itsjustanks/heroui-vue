import { defineComponent } from 'vue'
import { DropdownMenuSub as RekaDropdownMenuSub } from 'reka-ui'

/**
 * DropdownSub — root of a nested submenu; renders no DOM.
 *
 * Wrap `DropdownSubmenuTrigger` + `DropdownSubPopover` as children.
 */
export const DropdownSub = defineComponent({
  name: 'DropdownSub',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuSub {...attrs}>
        {slots.default?.()}
      </RekaDropdownMenuSub>
    )
  }
})

export default DropdownSub
