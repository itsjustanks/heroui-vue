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
 * Uses `asChild` to forward trigger role onto the inner element without
 * creating nested interactive elements.
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
      <RekaPopoverTrigger asChild>
        <div
          {...attrs}
          data-slot="popover-trigger"
          role="button"
          class={cn((ctx?.slots.value ?? popoverVariants()).trigger(), props.class)}
        >
          {slots.default?.()}
        </div>
      </RekaPopoverTrigger>
    )
  }
})

export default PopoverTrigger
