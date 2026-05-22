import { computed, defineComponent, provide } from 'vue'
import { DropdownMenuRoot as RekaDropdownMenuRoot } from 'reka-ui'
import { dropdownVariants, type DropdownVariants } from '@heroui/styles'
import type { PropType } from 'vue'
import { DROPDOWN_CONTEXT } from './dropdown-context'

/**
 * DropdownRoot — root of the HeroUI v3 Dropdown compound component.
 *
 * Computes `dropdownVariants()` and provides the slot map to all compound
 * parts. Renders no DOM — wraps reka-ui `DropdownMenuRoot` (logic only).
 */
export const DropdownRoot = defineComponent({
  name: 'DropdownRoot',
  inheritAttrs: false,
  props: {
    /** @unused — reserved for future DropdownVariants props. */
    _variant: { type: String as PropType<DropdownVariants extends never ? string : string>, default: undefined }
  },
  setup (_props, { attrs, slots }) {
    const styles = computed(() => dropdownVariants())
    provide(DROPDOWN_CONTEXT, { slots: styles })

    return () => (
      <RekaDropdownMenuRoot {...attrs}>
        {slots.default?.()}
      </RekaDropdownMenuRoot>
    )
  }
})

export default DropdownRoot
