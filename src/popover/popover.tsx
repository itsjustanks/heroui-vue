import { computed, defineComponent, provide, type PropType } from 'vue'
import { PopoverRoot as RekaPopoverRoot, PopoverTrigger as RekaPopoverTrigger } from 'reka-ui'
import { popoverVariants } from '@heroui/styles'
import { withAutoTrigger } from '@/lib/auto-trigger'
import { POPOVER_CONTEXT } from './popover-context'

/**
 * PopoverRoot — the compound root. Mirrors HeroUI v3 `PopoverRoot` which wraps
 * `DialogTrigger` (react-aria) with `data-slot="popover-root"` and provides the
 * `popoverVariants` slot map to all compound parts.
 *
 * reka-ui `PopoverRoot` is the direct Vue equivalent of RAC `DialogTrigger`:
 * it manages open state and anchors `PopoverTrigger` to `PopoverContent`.
 *
 * Like HeroUI v3, the FIRST child of `<Popover>` is treated as the trigger
 * automatically — no explicit `<Popover.Trigger>` wrapper required (though
 * `<Popover.Trigger>` still works for back-compat).
 */
export const PopoverRoot = defineComponent({
  name: 'PopoverRoot',
  inheritAttrs: false,
  props: {
    open: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    modelValue: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    defaultOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    onOpenChange: { type: Function as PropType<(open: boolean) => void>, default: undefined }
  },
  emits: {
    'update:open': (_open: boolean) => true,
    'update:modelValue': (_open: boolean) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => popoverVariants())
    provide(POPOVER_CONTEXT, { slots: styles })

    const handleOpenChange = (open: boolean) => {
      props.onOpenChange?.(open)
      emit('update:open', open)
      emit('update:modelValue', open)
    }

    return () => {
      const controlledOpen = props.isOpen ?? props.open ?? props.modelValue

      return (
        <RekaPopoverRoot
          data-slot="popover-root"
          {...attrs}
          open={controlledOpen}
          defaultOpen={props.defaultOpen}
          onUpdate:open={handleOpenChange}
        >
          {withAutoTrigger(slots.default?.(), RekaPopoverTrigger, 'PopoverTrigger')}
        </RekaPopoverRoot>
      )
    }
  }
})

export default PopoverRoot
