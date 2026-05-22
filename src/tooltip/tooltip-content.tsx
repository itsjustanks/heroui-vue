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
          data-slot="tooltip"
          class={cn('tooltip', props.class)}
        >
          {slots.default?.()}
        </RekaTooltipContent>
      </TooltipPortal>
    )
  }
})

export default TooltipContent
