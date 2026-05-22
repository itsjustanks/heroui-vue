import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { menuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MENUBAR_ITEM_CONTEXT } from './menubar-item-context'

/**
 * MenubarItemIndicator — leading checkmark / dot span (HeroUI `menu-item__indicator`).
 *
 * Always present in the DOM; `data-visible` is set when the item is selected
 * so HeroUI CSS can animate the indicator into view.
 *
 * @prop type - `"checkmark"` (default) or `"dot"`.
 */
export const MenubarItemIndicator = defineComponent({
  name: 'MenubarItemIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Indicator shape. @default 'checkmark' */
    type: { type: String as PropType<'checkmark' | 'dot'>, default: 'checkmark' }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MENUBAR_ITEM_CONTEXT, null)
    const fallback = menuItemVariants()

    const defaultCheckmark = (isSelected: boolean) => (
      <svg
        aria-hidden="true"
        data-slot="menu-item-indicator--checkmark"
        fill="none"
        role="presentation"
        stroke="currentColor"
        stroke-dasharray={22}
        stroke-dashoffset={isSelected ? 44 : 66}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        viewBox="0 0 17 18"
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    )

    const defaultDot = () => (
      <svg
        aria-hidden="true"
        data-slot="menu-item-indicator--dot"
        fill="currentColor"
        fill-rule="evenodd"
        role="presentation"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fill-rule="evenodd" />
      </svg>
    )

    return () => {
      const isSelected = ctx?.isSelected.value ?? false
      const indicatorClass = (ctx?.slots.value ?? fallback).indicator()

      return (
        <span
          {...attrs}
          aria-hidden="true"
          data-slot="menu-item-indicator"
          data-type={props.type}
          data-visible={isSelected || undefined}
          class={cn(indicatorClass, props.class)}
        >
          {slots.default?.() ?? (props.type === 'dot' ? defaultDot() : defaultCheckmark(isSelected))}
        </span>
      )
    }
  }
})

export default MenubarItemIndicator
