import { defineComponent } from 'vue'
import { MenubarTrigger as RekaMenubarTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarTrigger — the clickable label in the bar that opens its menu.
 *
 * Open state uses reka-ui's `data-[state=open]` attribute, lit with the HeroUI
 * `accent` token; rounded to the HeroUI `md` radius.
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
