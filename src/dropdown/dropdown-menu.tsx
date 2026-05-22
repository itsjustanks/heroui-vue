import { defineComponent } from 'vue'
import { DropdownMenuRoot } from 'reka-ui'

/**
 * DropdownMenu — root of the HeroUI-Vue dropdown.
 *
 * Thin wrapper over reka-ui `DropdownMenuRoot` — logic only, renders no DOM.
 * Forwards all props/emits (`open`, `defaultOpen`, `onUpdate:open`, `modal`, …).
 */
export const DropdownMenu = defineComponent({
  name: 'DropdownMenu',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <DropdownMenuRoot {...attrs}>{slots.default?.()}</DropdownMenuRoot>
  }
})

export default DropdownMenu
