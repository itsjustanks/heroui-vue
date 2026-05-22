import { computed, defineComponent, provide } from 'vue'
import { MenubarSubTrigger as RekaMenubarSubTrigger } from 'reka-ui'
import { menuItemVariants } from '@heroui/styles'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'
import { MENUBAR_ITEM_CONTEXT } from './menubar-item-context'

/**
 * MenubarSubTrigger — a HeroUI `menu-item` that opens a nested submenu.
 *
 * Provides `MENUBAR_ITEM_CONTEXT` so the built-in submenu indicator can read
 * the correct slot class. The trailing chevron is always rendered.
 */
export const MenubarSubTrigger = defineComponent({
  name: 'MenubarSubTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => menuItemVariants())
    const isSelected = computed(() => false)
    provide(MENUBAR_ITEM_CONTEXT, { slots: styles, isSelected })

    return () => (
      <RekaMenubarSubTrigger
        {...attrs}
        data-slot="menu-item"
        class={cn(styles.value.item(), props.class)}
      >
        {slots.default?.()}
        <span
          aria-hidden="true"
          data-slot="submenu-indicator"
          class={cn(styles.value.submenuIndicator())}
        >
          <IconChevronRight class="size-4" />
        </span>
      </RekaMenubarSubTrigger>
    )
  }
})

export default MenubarSubTrigger
