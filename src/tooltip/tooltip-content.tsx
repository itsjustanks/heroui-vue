import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { TooltipContent as RekaTooltipContent, TooltipPortal } from 'reka-ui'
import { tooltipVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { TOOLTIP_CONTEXT } from './tooltip-context'
import { TooltipArrow } from './tooltip-arrow'

/**
 * TooltipContent — the floating tip surface.
 * Mirrors HeroUI v3 `TooltipContent` (`slots.base()` on the overlay element).
 *
 * ⚠️  OVERLAY SHIM — DO NOT REMOVE.
 * Rendered `asChild` so reka-ui hands control of the overlay DOM element to our
 * `<div>`. `withDirectives(..., [[vHerouiState]])` then mirrors reka-ui's
 * `data-side` → `data-placement` and `data-state` → `data-entering`/`data-exiting`
 * so HeroUI's CSS placement-aware animations work correctly.
 */
export const TooltipContent = defineComponent({
  name: 'TooltipContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    placement: { type: String as PropType<'top' | 'bottom' | 'left' | 'right' | 'top start' | 'top end' | 'bottom start' | 'bottom end' | 'left start' | 'left end' | 'right start' | 'right end'>, default: undefined },
    side: { type: String as PropType<'top' | 'bottom' | 'left' | 'right'>, default: undefined },
    offset: { type: Number, default: undefined },
    sideOffset: { type: Number, default: undefined },
    showArrow: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TOOLTIP_CONTEXT, null)

    return () => {
      const styles = ctx?.slots.value ?? tooltipVariants()

      return (
        <TooltipPortal>
          <RekaTooltipContent
            side={props.side ?? props.placement?.split(' ')[0] as 'top' | 'bottom' | 'left' | 'right' | undefined}
            sideOffset={props.sideOffset ?? props.offset ?? (props.showArrow ? 7 : 3)}
            asChild
          >
            {withDirectives(
              (
                <div {...attrs} class={cn(styles.base(), props.class)}>
                  {props.showArrow ? <TooltipArrow /> : null}
                  {slots.default?.()}
                </div>
              ),
              [[vHerouiState]]
            )}
          </RekaTooltipContent>
        </TooltipPortal>
      )
    }
  }
})

export default TooltipContent
