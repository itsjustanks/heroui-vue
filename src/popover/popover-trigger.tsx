import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PopoverTrigger as RekaPopoverTrigger } from 'reka-ui'
import { popoverVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { POPOVER_CONTEXT } from './popover-context'

/**
 * PopoverTrigger — the element that opens the popover.
 * Mirrors HeroUI v3 `PopoverTrigger` (`data-slot="popover-trigger"`,
 * styled with `slots.trigger()`).
 *
 * Pass `asChild` to forward the trigger role onto a custom child element
 * (reka-ui convention).
 */
export const PopoverTrigger = defineComponent({
  name: 'PopoverTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(POPOVER_CONTEXT, null)

    return () => (
      <RekaPopoverTrigger
        {...attrs}
        data-slot="popover-trigger"
        class={cn((ctx?.slots.value ?? popoverVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
      </RekaPopoverTrigger>
    )
  }
})

export default PopoverTrigger
