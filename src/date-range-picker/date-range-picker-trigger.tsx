import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarDays as IconCalendarDays } from 'lucide-vue-next'
import { DateRangePickerTrigger as RekaDateRangePickerTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DateRangePickerTrigger — opens the range calendar popover. HeroUI v3
 * `DateRangePicker.Trigger` + `DateRangePicker.TriggerIndicator` collapsed.
 *
 * Sits as the trailing adornment of `DateRangePickerField` (`ml-auto`).
 * Defaults to a calendar icon; pass children to override.
 */
export const DateRangePickerTrigger = defineComponent({
  name: 'DateRangePickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDateRangePickerTrigger
        {...attrs}
        data-slot="date-range-picker-trigger"
        class={cn('date-range-picker__trigger', props.class)}
      >
        {slots.default ? slots.default() : <IconCalendarDays data-slot="date-range-picker-trigger-indicator" class="date-range-picker__trigger-indicator" />}
      </RekaDateRangePickerTrigger>
    )
  }
})

export default DateRangePickerTrigger
