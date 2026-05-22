import { defineComponent } from 'vue'
import { MenubarItem as RekaMenubarItem } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarItem — HeroUI `menu-item`.
 *
 * Interactive states use reka-ui's `data-[highlighted]` / `data-[disabled]`
 * attributes. `inset` adds left padding to align with checkbox/radio items.
 */
export const MenubarItem = defineComponent({
  name: 'MenubarItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    inset: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarItem
        {...attrs}
        data-slot="menu-item"
        class={cn('menu-item menu-item--default', props.class)}
      >
        {slots.default?.()}
      </RekaMenubarItem>
    )
  }
})

export default MenubarItem
