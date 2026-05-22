import { defineComponent } from 'vue'
import { MenubarSubTrigger as RekaMenubarSubTrigger } from 'reka-ui'
import { ChevronRight as IconChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarSubTrigger — a HeroUI menu-item that opens a submenu (`data-state=open`). */
export const MenubarSubTrigger = defineComponent({
  name: 'MenubarSubTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    inset: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarSubTrigger
        {...attrs}
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.inset && 'pl-8',
          props.class
        )}
      >
        {slots.default?.()}
        <IconChevronRight class="ml-auto size-4 text-muted-foreground" />
      </RekaMenubarSubTrigger>
    )
  }
})

export default MenubarSubTrigger
