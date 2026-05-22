import { defineComponent } from 'vue'
import { SelectRoot } from 'reka-ui'

/**
 * Select — root of the HeroUI-Vue select (primitive library port).
 *
 * Thin wrapper over reka-ui `SelectRoot` — logic only, renders no DOM.
 * Forwards all props/emits (`modelValue`, `defaultValue`, `onUpdate:modelValue`,
 * `open`, `disabled`, `multiple`, …) via `{...attrs}`.
 */
export const Select = defineComponent({
  // `name` avoids the HTML-reserved `select`; the exported identifier stays `Select`.
  name: 'SelectRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <SelectRoot {...attrs}>{slots.default?.()}</SelectRoot>
  }
})

export default Select
