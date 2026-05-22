import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TooltipArrow — the visual caret indicator for a Tooltip.
 * Mirrors HeroUI v3 `Tooltip.Arrow` (`data-slot="tooltip-arrow"` on the wrapper,
 * `data-slot="overlay-arrow"` on the SVG child).
 *
 * reka-ui has no OverlayArrow primitive; we render the equivalent DOM structure.
 * Place this inside `TooltipContent` to show the arrow.
 */
export const TooltipArrow = defineComponent({
  name: 'TooltipArrow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const defaultArrow = (
      <svg
        data-slot="overlay-arrow"
        fill="none"
        height="12"
        viewBox="0 0 12 12"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0C5.48483 8 6.5 8 12 0Z" />
      </svg>
    )

    return () => (
      <span
        {...attrs}
        data-slot="tooltip-arrow"
        class={cn(props.class)}
      >
        {slots.default?.() ?? defaultArrow}
      </span>
    )
  }
})

export default TooltipArrow
