import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconCalendarDays } from '@/icons'
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
        class={cn('date-picker__trigger', props.class)}
      >
        {slots.default ? slots.default() : <IconCalendarDays data-slot="date-picker-trigger-indicator" class="date-picker__trigger-indicator" />}
      </RekaDatePickerTrigger>
    )
  }
})

export default DatePickerTrigger
