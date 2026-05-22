import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSubContent as RekaDropdownMenuSubContent } from 'reka-ui'
import { cn } from '@/lib/utils'

/** DropdownMenuSubContent — the nested submenu popover; same surface as the root menu. */
export const DropdownMenuSubContent = defineComponent({
  name: 'DropdownMenuSubContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuSubContent
        {...attrs}
        class={cn('dropdown__popover', props.class)}
      >
        <div data-slot="dropdown-menu" class="dropdown__menu">
          {slots.default?.()}
        </div>
      </RekaDropdownMenuSubContent>
    )
  }
})

export default DropdownMenuSubContent
