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
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-lg px-2.5 py-1.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          '[&>svg]:size-4 [&>svg]:shrink-0',
          props.inset && 'pl-8',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaMenubarItem>
    )
  }
})

export default MenubarItem
