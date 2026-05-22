import { defineComponent } from 'vue'
import { MenubarRadioItem as MenubarRadioItemBase, MenubarItemIndicator } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaMenubarRadioItem: any = MenubarRadioItemBase
import { IconCircle } from '@/icons'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarRadioItem — HeroUI menu-item with a leading dot indicator. */
export const MenubarRadioItem = defineComponent({
  name: 'MenubarRadioItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarRadioItem
        {...(attrs as Record<string, any>)}
        data-slot="menu-item"
        class={cn('menu-item menu-item--default', props.class)}
      >
        <span class="menu-item__indicator" data-slot="menu-item-indicator">
          <MenubarItemIndicator>
            <IconCircle data-slot="menu-item-indicator--dot" />
          </MenubarItemIndicator>
        </span>
        {slots.default?.()}
      </RekaMenubarRadioItem>
    )
  }
})

export default MenubarRadioItem
