import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSubTrigger as RekaDropdownMenuSubTrigger } from 'reka-ui'
import { ChevronRight as IconChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/** DropdownMenuSubTrigger — a HeroUI menu-item that opens a submenu (`data-has-submenu`). */
export const DropdownMenuSubTrigger = defineComponent({
  name: 'DropdownMenuSubTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuSubTrigger
        {...attrs}
        data-slot="menu-item"
        data-has-submenu="true"
        class={cn('menu-item menu-item--default', props.class)}
      >
        {slots.default?.()}
        <span data-slot="submenu-indicator" class="ml-auto">
          <IconChevronRight class="size-4" />
        </span>
      </RekaDropdownMenuSubTrigger>
    )
  }
})

export default DropdownMenuSubTrigger
