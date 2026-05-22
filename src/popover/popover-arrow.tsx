import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * PopoverArrow — the visual caret indicator for a Popover.
 * Mirrors HeroUI v3 `Popover.Arrow` (`data-slot="popover-overlay-arrow-group"`
 * on the wrapper, `data-slot="popover-overlay-arrow"` on the SVG child).
 *
 * reka-ui has no OverlayArrow primitive; we render the equivalent DOM structure.
 * Place this inside `PopoverContent` to show the arrow.
 */
export const PopoverArrow = defineComponent({
  name: 'PopoverArrow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const defaultArrow = (
      <svg
        data-slot="popover-overlay-arrow"
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
        data-slot="popover-overlay-arrow-group"
        class={cn(props.class)}
      >
        {slots.default?.() ?? defaultArrow}
      </span>
    )
  }
})

export default PopoverArrow
