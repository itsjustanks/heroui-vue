import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PopoverContent as RekaPopoverContent, PopoverPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * PopoverContent — the floating panel. HeroUI `popover.css`: overlay surface,
 * `rounded-2xl`, `p-4` dialog padding, placement-aware animation. Tokens adapted
 * to the repo; reka-ui `data-state` / `data-side`.
 */
export const PopoverContent = defineComponent({
  name: 'PopoverContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'center' },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <PopoverPortal>
        <RekaPopoverContent
          {...attrs}
          align={props.align}
          sideOffset={props.sideOffset}
          class={cn(
            'z-50 w-72 rounded-2xl border border-border bg-popover p-4 text-sm text-popover-foreground shadow-lg outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.class
          )}
        >
          {slots.default?.()}
        </RekaPopoverContent>
      </PopoverPortal>
    )
  }
})

export default PopoverContent
