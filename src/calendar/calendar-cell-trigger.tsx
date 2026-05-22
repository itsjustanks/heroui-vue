import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarCellTrigger as RekaCalendarCellTrigger } from 'reka-ui'
import type { CalendarCellTriggerProps } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * CalendarCellTrigger — the pressable button inside a calendar cell.
 *
 * @internal Used internally by `CalendarCell`.  Exported for advanced
 * use-cases that need direct access to the reka-ui trigger primitive.
 * Prefer `Calendar.Cell` for typical usage.
 */
export const CalendarCellTrigger = defineComponent({
  name: 'CalendarCellTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    day: { type: Object as PropType<CalendarCellTriggerProps['day']>, required: true },
    month: { type: Object as PropType<CalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarCellTrigger
        day={props.day}
        month={props.month}
        {...attrs}
        data-slot="calendar-cell"
        class={cn((ctx?.slots.value ?? calendarVariants()).cell(), props.class)}
      >
        {{
          default: ({ formattedDate }: { formattedDate: string }) =>
            slots.default
              ? slots.default({ formattedDate })
              : (
                <span
                  aria-hidden="true"
                  data-slot="calendar-cell-indicator"
                  class={(ctx?.slots.value ?? calendarVariants()).cellIndicator()}
                >
                  {formattedDate}
                </span>
              )
        }}
      </RekaCalendarCellTrigger>
    )
  }
})

export default CalendarCellTrigger
