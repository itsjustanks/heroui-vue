import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { MenubarItem as RekaMenubarItem } from 'reka-ui'
import { menuItemVariants, type MenuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MENUBAR_ITEM_CONTEXT } from './menubar-item-context'

/**
 * MenubarItem — a single menu row (HeroUI `menu-item`).
 *
 * Computes `menuItemVariants({ variant })` and provides the slot map to
 * `MenubarItemIndicator` children.
 */
export const MenubarItem = defineComponent({
  name: 'MenubarItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** `"danger"` maps to HeroUI `menu-item--danger`. @default 'default' */
    variant: { type: String as PropType<MenuItemVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => menuItemVariants({ variant: props.variant }))
    const isSelected = computed(() => (attrs as any)['data-state'] === 'checked')
    provide(MENUBAR_ITEM_CONTEXT, { slots: styles, isSelected })

    return () => (
      <RekaMenubarItem
        {...attrs}
        data-slot="menu-item"
        class={cn(styles.value.item(), props.class)}
      >
        {slots.default?.()}
      </RekaMenubarItem>
    )
  }
})

export default MenubarItem
