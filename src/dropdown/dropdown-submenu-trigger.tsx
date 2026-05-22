import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSubTrigger as RekaDropdownMenuSubTrigger } from 'reka-ui'
import { menuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DROPDOWN_ITEM_CONTEXT } from './dropdown-item-context'
import { DropdownSubmenuIndicator } from './dropdown-submenu-indicator'

/**
 * DropdownSubmenuTrigger — a menu row that opens a nested submenu
 * (HeroUI `menu-item` + trailing `DropdownSubmenuIndicator`).
 *
 * Provides `DROPDOWN_ITEM_CONTEXT` so the built-in `DropdownSubmenuIndicator`
 * can read the correct slot class.
 */
export const DropdownSubmenuTrigger = defineComponent({
  name: 'DropdownSubmenuTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => menuItemVariants())
    const isSelected = computed(() => false)
    provide(DROPDOWN_ITEM_CONTEXT, { slots: styles, isSelected })

    return () => (
      <RekaDropdownMenuSubTrigger
        {...attrs}
        data-slot="dropdown-submenu-trigger"
        class={cn(styles.value.item(), props.class)}
      >
        {slots.default?.()}
        <DropdownSubmenuIndicator />
      </RekaDropdownMenuSubTrigger>
    )
  }
})

export default DropdownSubmenuTrigger
