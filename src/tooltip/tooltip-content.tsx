import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TooltipContent as RekaTooltipContent, TooltipPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TooltipContent — the floating tip. HeroUI `tooltip.css`: compact overlay
 * surface, `text-xs`, `rounded-xl`, placement-aware animation. Tokens adapted
 * to the repo (`bg-popover`, `shadow-lg`); reka-ui `data-state` / `data-side`.
 */
export const TooltipContent = defineComponent({
  name: 'TooltipContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <TooltipPortal>
        <RekaTooltipContent
          {...attrs}
          sideOffset={props.sideOffset}
          class={cn(
            'z-50 max-w-xs rounded-xl bg-popover p-2 text-xs text-popover-foreground shadow-lg',
            'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.class
          )}
        >
          {slots.default?.()}
        </RekaTooltipContent>
      </TooltipPortal>
    )
  }
})

export default TooltipContent
