import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { popoverVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { POPOVER_CONTEXT } from './popover-context'

/**
 * PopoverHeading — the popover title (HeroUI `popover__heading`).
 * Mirrors HeroUI v3 `Popover.Heading` (`data-slot="popover-heading"`).
 * Equivalent to react-aria `Heading slot="title"`.
 */
export const PopoverHeading = defineComponent({
  name: 'PopoverHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(POPOVER_CONTEXT, null)

    return () => (
      <h2
        {...attrs}
        data-slot="popover-heading"
        class={cn((ctx?.slots.value ?? popoverVariants()).heading(), props.class)}
      >
        {slots.default?.()}
      </h2>
    )
  }
})

export default PopoverHeading
