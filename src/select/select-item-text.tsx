import { defineComponent } from 'vue'
import { SelectItemText as RekaSelectItemText } from 'reka-ui'

/**
 * SelectItemText — the text part of a `SelectItem`, mirrored into the trigger's
 * `SelectValue`. Thin wrapper over reka-ui `SelectItemText`.
 */
export const SelectItemText = defineComponent({
  name: 'SelectItemText',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaSelectItemText {...attrs}>{slots.default?.()}</RekaSelectItemText>
  }
})

export default SelectItemText
