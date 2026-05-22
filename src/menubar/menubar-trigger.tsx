import { defineComponent } from 'vue'
import { MenubarTrigger as RekaMenubarTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarTrigger — the clickable label in the bar that opens its menu.
 *
 * Styled with Tailwind tokens only (no HeroUI `@heroui/styles` variant exists
 * for the bar trigger). Open state uses reka-ui's `data-[state=open]`.
 */
export const MenubarTrigger = defineComponent({
  name: 'MenubarTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarTrigger
        {...attrs}
        data-slot="menubar-trigger"
        class={cn(
          'flex cursor-default select-none items-center rounded-md px-3 py-1.5 text-sm font-medium outline-none transition-colors',
          'focus:bg-accent focus:text-accent-foreground',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaMenubarTrigger>
    )
  }
})

export default MenubarTrigger
