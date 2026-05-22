import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dropdownVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DROPDOWN_CONTEXT } from './dropdown-context'

/**
 * DropdownMenu — the scrollable list container (HeroUI `dropdown__menu`).
 *
 * Placed inside `DropdownPopover` to hold `DropdownItem` / `DropdownSection`
 * children. Pure presentational `<div>`.
 */
export const DropdownMenu = defineComponent({
  name: 'DropdownMenu',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DROPDOWN_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="dropdown-menu"
        class={cn((ctx?.slots.value ?? dropdownVariants()).menu(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DropdownMenu
