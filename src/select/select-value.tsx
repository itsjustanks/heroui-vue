import { defineComponent } from 'vue'
import { SelectValue as RekaSelectValue } from 'reka-ui'

/**
 * SelectValue — renders the selected item's text inside the trigger.
 *
 * Thin wrapper over reka-ui `SelectValue`; `placeholder` and all other props
 * are forwarded via `{...attrs}`.
 */
export const SelectValue = defineComponent({
  name: 'SelectValue',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaSelectValue {...attrs}>{slots.default?.()}</RekaSelectValue>
  }
})

export default SelectValue
