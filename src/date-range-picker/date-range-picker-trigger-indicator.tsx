import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateRangePickerVariants } from '@heroui/styles'
import { IconCalendarDays } from '@/icons'
import { cn } from '@/lib/utils'
import { DATE_RANGE_PICKER_CONTEXT } from './date-range-picker-context'

/**
 * DateRangePickerTriggerIndicator — the calendar icon inside the trigger button.
 * HeroUI v3 `DateRangePicker.TriggerIndicator` (`data-slot="date-range-picker-trigger-indicator"`).
 *
 * Rendered `aria-hidden`. Override with default slot children.
 */
export const DateRangePickerTriggerIndicator = defineComponent({
  name: 'DateRangePickerTriggerIndicator',
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
          data-slot="date-range-picker-trigger-indicator"
          class={cn(styles.triggerIndicator(), props.class)}
        >
          {slots.default ? slots.default() : <IconCalendarDays class="size-4" />}
        </span>
      )
    }
  }
})

export default DateRangePickerTriggerIndicator
