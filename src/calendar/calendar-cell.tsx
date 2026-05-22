import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarCell as RekaCalendarCell, CalendarCellTrigger as RekaCalendarCellTrigger } from 'reka-ui'
import type { CalendarCellProps, CalendarCellTriggerProps } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * Calendar.Cell — the pressable day cell.
 *
 * Mirrors HeroUI React `CalendarCell` which renders
 * `<CalendarCellPrimitive data-slot="calendar-cell">` with the formatted date
 * inside `<span data-slot="calendar-cell-indicator">` by default.
 *
 * In reka-ui the `<td>` (`CalendarCell`) and the pressable button
 * (`CalendarCellTrigger`) are separate primitives, so both are composed here.
 * The `date` prop is the specific day; `month` is the grid month value needed
 * by reka-ui to determine out-of-month cells — it must be the `month.value`
 * object from the root's scoped slot.
 *
 * ```vue
 * <Calendar>
 *   <template #default="{ grid, weekDays }">
 *     <Calendar.Grid v-for="month in grid" :key="month.value.toString()">
 *       <Calendar.GridBody>
 *         <Calendar.GridRow v-for="(week, i) in month.rows" :key="i">
 *           <Calendar.Cell
 *             v-for="day in week"
 *             :key="day.toString()"
 *             :date="day"
 *             :month="month.value"
 *           />
 *         </Calendar.GridRow>
 *       </Calendar.GridBody>
 *     </Calendar.Grid>
 *   </template>
 * </Calendar>
 * ```
 */
export const CalendarCell = defineComponent({
  name: 'CalendarCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The specific day DateValue for this cell. */
    date: { type: Object as PropType<CalendarCellProps['date']>, required: true },
    /** The current grid month DateValue — required by reka-ui to detect out-of-month days. */
    month: { type: Object as PropType<CalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarCell date={props.date}>
        <RekaCalendarCellTrigger
          day={props.date}
          month={props.month}
          {...attrs}
          data-slot="calendar-cell"
          class={cn((ctx?.slots.value ?? calendarVariants()).cell(), props.class)}
        >
          {{
            // reka-ui's CalendarCellTrigger exposes the day label as `dayValue`.
            // Forward it to consumers as both `dayValue` and `formattedDate`
            // (HeroUI React's name) so either spelling works.
            default: (cellProps: { dayValue: string }) =>
              slots.default
                ? slots.default({ ...cellProps, formattedDate: cellProps.dayValue })
                : (
                  <span
                    aria-hidden="true"
                    data-slot="calendar-cell-indicator"
                    class={(ctx?.slots.value ?? calendarVariants()).cellIndicator()}
                  >
                    {cellProps.dayValue}
                  </span>
                )
          }}
        </RekaCalendarCellTrigger>
      </RekaCalendarCell>
    )
  }
})

export default CalendarCell
