import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuRadioItem as DropdownMenuRadioItemBase, DropdownMenuItemIndicator } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaDropdownMenuRadioItem: any = DropdownMenuRadioItemBase
import { IconCircle } from '@/icons'
import { cn } from '@/lib/utils'

/** DropdownMenuRadioItem — HeroUI menu-item with a leading dot indicator. */
export const DropdownMenuRadioItem = defineComponent({
  name: 'DropdownMenuRadioItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuRadioItem
        {...(attrs as Record<string, any>)}
        data-slot="menu-item"
        class={cn('menu-item menu-item--default', props.class)}
      >
        <span class="menu-item__indicator">
          <DropdownMenuItemIndicator>
            <IconCircle data-slot="menu-item-indicator--dot" class="size-2 fill-current" />
          </DropdownMenuItemIndicator>
        </span>
        {slots.default?.()}
      </RekaDropdownMenuRadioItem>
    )
  }
})

export default DropdownMenuRadioItem
