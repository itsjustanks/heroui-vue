import { computed, defineComponent, provide } from 'vue'
import { PopoverRoot as RekaPopoverRoot } from 'reka-ui'
import { popoverVariants } from '@heroui/styles'
import { POPOVER_CONTEXT } from './popover-context'

/**
 * PopoverRoot — the compound root. Mirrors HeroUI v3 `PopoverRoot` which wraps
 * `DialogTrigger` (react-aria) with `data-slot="popover-root"` and provides the
 * `popoverVariants` slot map to all compound parts.
 *
 * reka-ui `PopoverRoot` is the direct Vue equivalent of RAC `DialogTrigger`:
 * it manages open state and anchors `PopoverTrigger` to `PopoverContent`.
 */
export const PopoverRoot = defineComponent({
  name: 'PopoverRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    const styles = computed(() => popoverVariants())
    provide(POPOVER_CONTEXT, { slots: styles })

    return () => (
      <RekaPopoverRoot data-slot="popover-root" {...attrs}>
        {slots.default?.()}
      </RekaPopoverRoot>
    )
  }
})

export default PopoverRoot
