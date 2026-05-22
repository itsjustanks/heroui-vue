import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DateRangePicker — HeroUI-Vue date-range-picker root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `DateRangePicker` over reka-ui `DateRangePickerRoot`.
 * `DateRangePickerRoot` wires a dual-segment date field + a popover + a range
 * calendar into one shared context. Date engine stays `@internationalized/date`
 * — `modelValue`/`defaultValue` is a `{ start, end }` `DateRange`; every
 * `DateRangePickerRoot` prop is forwarded: `granularity`, `hourCycle`,
 * `minValue`/`maxValue`, `isDateDisabled`, `isDateUnavailable`,
 * `allowNonContiguousRanges`, `numberOfMonths`, `locale`, …
 *
 * Compound API: `DateRangePicker`, `DateRangePickerField`,
 * `DateRangePickerInput`, `DateRangePickerSeparator`, `DateRangePickerTrigger`,
 * `DateRangePickerContent`, `DateRangePickerCalendar` — mirrors HeroUI's
 * `DateRangePicker.*` parts.
 */
export const DateRangePicker = defineComponent({
  name: 'DateRangePickerView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DateRangePickerRoot
        {...(attrs as Record<string, any>)}
        class={cn('date-range-picker', props.class)}
      >
        {slots.default?.()}
      </DateRangePickerRoot>
    )
  }
})

export default DateRangePicker
