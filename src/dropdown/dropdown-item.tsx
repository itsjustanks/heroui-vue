import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'
import { menuItemVariants, type MenuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DROPDOWN_ITEM_CONTEXT } from './dropdown-item-context'

/**
 * DropdownItem — a single menu row (HeroUI `menu-item`).
 *
 * Computes `menuItemVariants({ variant })` and provides the slot map to
 * `DropdownItemIndicator` and `DropdownSubmenuIndicator` children.
 */
export const DropdownItem = defineComponent({
  name: 'DropdownItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** `"danger"` maps to HeroUI `menu-item--danger`. @default 'default' */
    variant: { type: String as PropType<MenuItemVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => menuItemVariants({ variant: props.variant }))
    // reka-ui sets `data-state="checked"` on selected items (checkbox / radio role)
    const isSelected = computed(() => (attrs as any)['data-state'] === 'checked')
    provide(DROPDOWN_ITEM_CONTEXT, { slots: styles, isSelected })

    return () => (
      <RekaDropdownMenuItem
        {...attrs}
        data-slot="menu-item"
        class={cn(styles.value.item(), props.class)}
      >
        {slots.default?.()}
      </RekaDropdownMenuItem>
    )
  }
})

export default DropdownItem
