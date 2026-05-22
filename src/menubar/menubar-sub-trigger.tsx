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
        data-slot="menu-item"
        class={cn('menu-item menu-item--default', props.class)}
      >
        {slots.default?.()}
        <span class="menu-item__indicator menu-item__indicator--submenu" data-slot="submenu-indicator">
          <IconChevronRight />
        </span>
      </RekaMenubarSubTrigger>
    )
  }
})

export default MenubarSubTrigger
