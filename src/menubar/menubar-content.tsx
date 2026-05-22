import { defineComponent } from 'vue'
import { MenubarContent as RekaMenubarContent, MenubarPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarContent — the popover surface for a menu.
 *
 * Same HeroUI menu surface as the dropdown (`menu.css`): contained card,
 * compact padding, placement-aware enter/exit animation. Styling adapted to
 * reka-ui's data attributes (`data-[state]`, `data-[side]`) and repo tokens.
 */
export const MenubarContent = defineComponent({
  name: 'MenubarContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'start' },
    alignOffset: { type: Number, default: -4 },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <MenubarPortal>
        <RekaMenubarContent
          {...attrs}
          align={props.align}
          alignOffset={props.alignOffset}
          sideOffset={props.sideOffset}
          class={cn(
            'z-50 flex min-w-48 flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-xl border border-border bg-popover p-1.5 text-sm text-popover-foreground shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.class
          )}
        >
          {slots.default?.()}
        </RekaMenubarContent>
      </MenubarPortal>
    )
  }
})

export default MenubarContent
