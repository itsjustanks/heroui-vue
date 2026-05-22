import { defineComponent } from 'vue'
import { DropdownMenuRadioGroup as RekaDropdownMenuRadioGroup } from 'reka-ui'

/** DropdownMenuRadioGroup — single-selection group for radio items. */
export const DropdownMenuRadioGroup = defineComponent({
  name: 'DropdownMenuRadioGroup',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuRadioGroup {...attrs}>{slots.default?.()}</RekaDropdownMenuRadioGroup>
    )
  }
})

export default DropdownMenuRadioGroup
