import { defineComponent } from 'vue'
import { MenubarCheckboxItem as RekaMenubarCheckboxItem, MenubarItemIndicator } from 'reka-ui'
import { IconCheck } from '@/icons'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarCheckboxItem — HeroUI menu-item with a leading checkmark indicator. */
export const MenubarCheckboxItem = defineComponent({
  name: 'MenubarCheckboxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarCheckboxItem
        {...attrs}
        data-slot="menu-item"
        class={cn('menu-item menu-item--default', props.class)}
      >
        <span class="menu-item__indicator" data-slot="menu-item-indicator">
          <MenubarItemIndicator>
            <IconCheck data-slot="menu-item-indicator--checkmark" />
          </MenubarItemIndicator>
        </span>
        {slots.default?.()}
      </RekaMenubarCheckboxItem>
    )
  }
})

export default MenubarCheckboxItem
