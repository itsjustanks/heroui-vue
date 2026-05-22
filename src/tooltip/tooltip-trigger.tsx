import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { TooltipTrigger as RekaTooltipTrigger } from 'reka-ui'
import { tooltipVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TOOLTIP_CONTEXT } from './tooltip-context'

/**
 * TooltipTrigger — the element the tooltip is anchored to.
 * Mirrors HeroUI v3 `TooltipTrigger` (`data-slot="tooltip-trigger"`,
 * styled with `slots.trigger()`).
 *
 * Uses `asChild` to forward trigger role onto the inner element without
 * creating nested interactive elements.
 */
export const TooltipTrigger = defineComponent({
  name: 'TooltipTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TOOLTIP_CONTEXT, null)

    return () => (
      <RekaTooltipTrigger asChild>
        <div
          {...attrs}
          data-slot="tooltip-trigger"
          class={cn((ctx?.slots.value ?? tooltipVariants()).trigger(), props.class)}
        >
          {slots.default?.()}
        </div>
      </RekaTooltipTrigger>
    )
  }
})

export default TooltipTrigger
