import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { menuItemVariants } from '@heroui/styles'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { DROPDOWN_ITEM_CONTEXT } from './dropdown-item-context'

/**
 * DropdownSubmenuIndicator — trailing chevron span (HeroUI `menu-item__indicator--submenu`).
 *
 * Rendered automatically by `DropdownSubmenuTrigger`; exposed as a named part
 * so consumers can replace the default chevron icon.
 */
export const DropdownSubmenuIndicator = defineComponent({
  name: 'DropdownSubmenuIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DROPDOWN_ITEM_CONTEXT, null)
    const fallback = menuItemVariants()

    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="submenu-indicator"
        class={cn((ctx?.slots.value ?? fallback).submenuIndicator(), props.class)}
      >
        {slots.default?.() ?? <IconChevronRight class="size-4" />}
      </span>
    )
  }
})

export default DropdownSubmenuIndicator
