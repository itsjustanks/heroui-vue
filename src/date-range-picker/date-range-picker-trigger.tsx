import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DateRangePickerTrigger as RekaDateRangePickerTrigger } from 'reka-ui'
import { dateRangePickerVariants } from '@heroui/styles'
import { IconCalendarDays } from '@/icons'
import { cn } from '@/lib/utils'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePickerTrigger — opens the range-calendar popover. HeroUI v3
 * `DateRangePicker.Trigger`.
 *
 * Wraps a separate `<span data-slot="date-range-picker-trigger-indicator"
 * aria-hidden>` child for the calendar icon, matching HeroUI React's
 * `TriggerIndicator` sub-element. Pass default slot children to override the
 * indicator content.
 */
export const DateRangePickerTrigger = defineComponent({
  name: 'DateRangePickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_RANGE_PICKER_CONTEXT, null)
    return () => {
      const styles = ctx?.slots.value ?? dateRangePickerVariants()
      return (
        <RekaDateRangePickerTrigger
          {...attrs}
          data-slot="date-range-picker-trigger"
          class={cn(styles.trigger(), props.class)}
        >
          <span
            aria-hidden="true"
            data-slot="date-range-picker-trigger-indicator"
            class={cn(styles.triggerIndicator())}
          >
            {slots.default ? slots.default() : <IconCalendarDays class="size-4" />}
          </span>
        </RekaDateRangePickerTrigger>
      )
    }
  }
})

export default DateRangePickerTrigger
