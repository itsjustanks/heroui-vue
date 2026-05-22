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
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-2xl px-2.5 py-1.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        {slots.default?.()}
        <IconChevronRight class="ml-auto size-4 text-muted-foreground" />
      </RekaDropdownMenuSubTrigger>
    )
  }
})

export default DropdownMenuSubTrigger
