import { computed, defineComponent, provide, type PropType } from 'vue'
import {
  TooltipRoot as RekaTooltipRoot,
  TooltipTrigger as RekaTooltipTrigger,
  TooltipProvider as RekaTooltipProvider,
  injectTooltipProviderContext,
} from 'reka-ui'
import { tooltipVariants } from '@heroui/styles'
import { withAutoTrigger } from '@/lib/auto-trigger'
import { TOOLTIP_CONTEXT } from './tooltip-context'

/**
 * TooltipRoot — the compound root. Mirrors HeroUI v3 `TooltipRoot` which wraps
 * `TooltipTrigger` (react-aria) with `data-slot="tooltip-root"` and provides the
 * `tooltipVariants` slot map to all compound parts.
 *
 * reka-ui `TooltipRoot` is the direct Vue equivalent of RAC `TooltipTrigger`:
 * it manages open state and anchors `TooltipTrigger` to `TooltipContent`.
 *
 * Like HeroUI v3, the FIRST child of `<Tooltip>` is treated as the trigger
 * automatically — no explicit `<Tooltip.Trigger>` wrapper required (though
 * `<Tooltip.Trigger>` still works for back-compat).
 */
export const TooltipRoot = defineComponent({
  name: 'TooltipRoot',
  inheritAttrs: false,
  props: {
    open: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    modelValue: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    defaultOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    delay: { type: Number, default: undefined },
    closeDelay: { type: Number, default: undefined },
    delayDuration: { type: Number, default: undefined },
    disableHoverableContent: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    onOpenChange: { type: Function as PropType<(open: boolean) => void>, default: undefined }
  },
  emits: {
    'update:open': (_open: boolean) => true,
    'update:modelValue': (_open: boolean) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => tooltipVariants())
    provide(TOOLTIP_CONTEXT, { slots: styles })

    // reka-ui's TooltipRoot requires a TooltipProvider ancestor; HeroUI React's
    // Tooltip needs none. If no provider is present, supply one transparently so
    // a bare <Tooltip> works standalone, matching upstream. A `null` fallback
    // turns the would-be "not found" throw into a plain absence check.
    const hasProvider = injectTooltipProviderContext(null) != null

    const handleOpenChange = (open: boolean) => {
      props.onOpenChange?.(open)
      emit('update:open', open)
      emit('update:modelValue', open)
    }

    return () => {
      const controlledOpen = props.isOpen ?? props.open ?? props.modelValue

      const root = (
        <RekaTooltipRoot
          data-slot="tooltip-root"
          {...attrs}
          open={controlledOpen}
          defaultOpen={props.defaultOpen}
          delayDuration={props.delayDuration ?? props.delay}
          disableHoverableContent={props.disableHoverableContent}
          onUpdate:open={handleOpenChange}
        >
          {withAutoTrigger(slots.default?.(), RekaTooltipTrigger, 'TooltipTrigger')}
        </RekaTooltipRoot>
      )

      return hasProvider ? root : <RekaTooltipProvider>{root}</RekaTooltipProvider>
    }
  }
})

export default TooltipRoot
