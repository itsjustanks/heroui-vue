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
        class={cn(
          'ml-auto flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none',
          'transition-colors hover:bg-accent hover:text-foreground',
          'focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconCalendarDays class="size-4" />}
      </RekaDateRangePickerTrigger>
    )
  }
})

export default DateRangePickerTrigger
