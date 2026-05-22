import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DropdownMenuContent — the popover surface.
 *
 * HeroUI `dropdown__popover` + `dropdown__menu`: a contained card with compact
 * padding and placement-aware enter/exit animation. Styling is adapted from
 * HeroUI's `dropdown.css`, translated to reka-ui's data attributes
 * (`data-[state]`, `data-[side]`) and the repo's surface tokens.
 */
export const DropdownMenuContent = defineComponent({
  name: 'DropdownMenuContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DropdownMenuPortal>
        <RekaDropdownMenuContent
          {...attrs}
          sideOffset={props.sideOffset}
          class={cn(
            'z-50 flex max-h-[var(--reka-dropdown-menu-content-available-height)] min-w-[12rem] flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-popover p-1.5 text-sm text-popover-foreground shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.class
          )}
        >
          {slots.default?.()}
        </RekaDropdownMenuContent>
      </DropdownMenuPortal>
    )
  }
})

export default DropdownMenuContent
