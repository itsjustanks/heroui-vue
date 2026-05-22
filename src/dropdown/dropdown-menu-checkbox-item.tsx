import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuCheckboxItem as RekaDropdownMenuCheckboxItem, DropdownMenuItemIndicator } from 'reka-ui'
import { IconCheck } from '@/icons'
import { cn } from '@/lib/utils'

/** DropdownMenuCheckboxItem — HeroUI menu-item with a leading checkmark indicator. */
export const DropdownMenuCheckboxItem = defineComponent({
  name: 'DropdownMenuCheckboxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuCheckboxItem
        {...attrs}
        data-slot="menu-item"
        class={cn('menu-item menu-item--default', props.class)}
      >
        <span class="menu-item__indicator">
          <DropdownMenuItemIndicator>
            <IconCheck data-slot="menu-item-indicator--checkmark" class="size-3.5" />
          </DropdownMenuItemIndicator>
        </span>
        {slots.default?.()}
      </RekaDropdownMenuCheckboxItem>
    )
  }
})

export default DropdownMenuCheckboxItem
