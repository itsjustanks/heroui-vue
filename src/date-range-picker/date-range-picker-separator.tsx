import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * DateRangePickerSeparator — the visual divider between the start and end
 * segment groups. HeroUI v3 `DateRangePicker.RangeSeparator`.
 *
 * Adapts HeroUI's `date-range-picker__range-separator` — a muted en-dash; pass
 * children to override the glyph.
 */
export const DateRangePickerSeparator = defineComponent({
  name: 'DateRangePickerSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="date-range-picker-separator"
        class={cn('px-1 text-muted-foreground', props.class)}
      >
        {slots.default ? slots.default() : '–'}
      </span>
    )
  }
})

export default DateRangePickerSeparator
