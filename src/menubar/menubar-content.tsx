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
          data-slot="menu"
          class={cn('menu', props.class)}
        >
          {slots.default?.()}
        </RekaMenubarContent>
      </MenubarPortal>
    )
  }
})

export default MenubarContent
