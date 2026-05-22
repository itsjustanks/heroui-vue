import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarDays as IconCalendarDays } from 'lucide-vue-next'
import { DatePickerTrigger as RekaDatePickerTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DatePickerTrigger — opens the calendar popover. HeroUI v3 `DatePicker.Trigger`
 * + `DatePicker.TriggerIndicator` collapsed into one part.
 *
 * Sits as the trailing adornment of `DatePickerField` (`ml-auto`). Defaults to a
 * calendar icon (HeroUI's `triggerIndicator`); pass children to override.
 */
export const DatePickerTrigger = defineComponent({
  name: 'DatePickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDatePickerTrigger
        {...attrs}
        data-slot="date-picker-trigger"
        class={cn(
          'ml-auto flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none',
          'transition-colors hover:bg-accent hover:text-foreground',
          'focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconCalendarDays class="size-4" />}
      </RekaDatePickerTrigger>
    )
  }
})

export default DatePickerTrigger
