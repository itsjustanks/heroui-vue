import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { TooltipContent as RekaTooltipContent, TooltipPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * TooltipContent — the floating tip (HeroUI `tooltip`).
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) binds the
 * real overlay element: it mirrors reka-ui's `data-side` to `data-placement`
 * and derives `data-entering`/`data-exiting` from `data-state`, which
 * `tooltip.css` keys its placement-aware enter/exit animation off.
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
        <RekaTooltipContent sideOffset={props.sideOffset} asChild>
          {withDirectives(
            (
              <div {...attrs} data-slot="tooltip" class={cn('tooltip', props.class)}>
                {slots.default?.()}
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaTooltipContent>
      </TooltipPortal>
    )
  }
})

export default TooltipContent
