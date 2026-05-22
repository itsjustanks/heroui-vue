import { computed, defineComponent, provide } from 'vue'
import { TooltipRoot as RekaTooltipRoot } from 'reka-ui'
import { tooltipVariants } from '@heroui/styles'
import { TOOLTIP_CONTEXT } from './tooltip-context'

/**
 * TooltipRoot — the compound root. Mirrors HeroUI v3 `TooltipRoot` which wraps
 * `TooltipTrigger` (react-aria) with `data-slot="tooltip-root"` and provides the
 * `tooltipVariants` slot map to all compound parts.
 *
 * reka-ui `TooltipRoot` is the direct Vue equivalent of RAC `TooltipTrigger`:
 * it manages open state and anchors `TooltipTrigger` to `TooltipContent`.
 */
export const TooltipRoot = defineComponent({
  name: 'TooltipRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    const styles = computed(() => tooltipVariants())
    provide(TOOLTIP_CONTEXT, { slots: styles })

    return () => (
      <RekaTooltipRoot data-slot="tooltip-root" {...attrs}>
        {slots.default?.()}
      </RekaTooltipRoot>
    )
  }
})

export default TooltipRoot
