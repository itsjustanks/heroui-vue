import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerTrigger as RekaDateRangePickerTrigger } from 'reka-ui'
import { dateRangePickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePicker.Trigger — the button that opens the range-calendar popover.
 * HeroUI v3 `DateRangePicker.Trigger` (`data-slot="date-range-picker-trigger"`).
 *
 * Pass a `DateRangePicker.TriggerIndicator` child for the calendar icon.
 */
export const DateRangePickerTrigger = defineComponent({
  name: 'DateRangePickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_RANGE_PICKER_CONTEXT, null)
    return () => (
      <RekaDateRangePickerTrigger
        {...attrs}
        data-slot="date-range-picker-trigger"
        class={cn((ctx?.slots.value ?? dateRangePickerVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
      </RekaDateRangePickerTrigger>
    )
  },
})

export default DateRangePickerTrigger
