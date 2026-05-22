import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateRangePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePickerRangeSeparator — the visual divider between the start and end
 * segment groups. HeroUI v3 `DateRangePicker.RangeSeparator`
 * (`data-slot="date-range-picker-range-separator"`).
 *
 * Defaults to " - ". Pass default slot children to override the glyph.
 */
export const DateRangePickerRangeSeparator = defineComponent({
  name: 'DateRangePickerRangeSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_RANGE_PICKER_CONTEXT, null)
    return () => {
      const styles = ctx?.slots.value ?? dateRangePickerVariants()
      return (
        <span
          {...attrs}
          aria-hidden="true"
          data-slot="date-range-picker-range-separator"
          class={cn(styles.rangeSeparator(), props.class)}
        >
          {slots.default ? slots.default() : ' - '}
        </span>
      )
    }
  }
})

export default DateRangePickerRangeSeparator
