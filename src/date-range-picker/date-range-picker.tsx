import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerRoot, useForwardPropsEmits } from 'reka-ui'
import type { DateRangePickerRootEmits, DateRangePickerRootProps } from 'reka-ui'
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
  emits: [] as unknown as DateRangePickerRootEmits,
  setup (props, { attrs, emit, slots }) {
    const forwarded = useForwardPropsEmits(attrs as DateRangePickerRootProps, emit as any)
    return () => (
      <DateRangePickerRoot
        {...forwarded.value}
        class={cn('flex flex-col gap-1.5', props.class)}
      >
        {slots.default?.()}
      </DateRangePickerRoot>
    )
  }
})

export default DateRangePicker
