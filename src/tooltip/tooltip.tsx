import { computed, defineComponent, provide, type PropType } from 'vue'
import { TooltipRoot as RekaTooltipRoot, TooltipTrigger as RekaTooltipTrigger } from 'reka-ui'
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

    const handleOpenChange = (open: boolean) => {
      props.onOpenChange?.(open)
      emit('update:open', open)
      emit('update:modelValue', open)
    }

    return () => {
      const controlledOpen = props.isOpen ?? props.open ?? props.modelValue

      return (
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
    }
  }
})

export default TooltipRoot
