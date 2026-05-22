import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarCell as RekaRangeCalendarCell, RangeCalendarCellTrigger as RekaRangeCalendarCellTrigger } from 'reka-ui'
import type { RangeCalendarCellProps, RangeCalendarCellTriggerProps } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * RangeCalendar.Cell — the pressable range day cell.
 *
 * Mirrors HeroUI React `RangeCalendarCell` which wraps
 * `<CalendarCellPrimitive data-slot="range-calendar-cell">` and renders an
 * inner `<span data-slot="range-calendar-cell-button">` for the range-band.
 *
 * In reka-ui the `<td>` (`RangeCalendarCell`) and the pressable button
 * (`RangeCalendarCellTrigger`) are separate primitives, so both are composed here.
 * The `date` prop is the specific day; `month` is the grid month value needed
 * by reka-ui to determine out-of-month cells — it must be the `month.value`
 * object from the root's scoped slot.
 *
 * ```vue
 * <RangeCalendar>
 *   <template #default="{ grid, weekDays }">
 *     <RangeCalendar.Grid v-for="month in grid" :key="month.value.toString()">
 *       <RangeCalendar.GridBody>
 *         <RangeCalendar.GridRow v-for="(week, i) in month.rows" :key="i">
 *           <RangeCalendar.Cell
 *             v-for="day in week"
 *             :key="day.toString()"
 *             :date="day"
 *             :month="month.value"
 *           />
 *         </RangeCalendar.GridRow>
 *       </RangeCalendar.GridBody>
 *     </RangeCalendar.Grid>
 *   </template>
 * </RangeCalendar>
 * ```
 */
export const RangeCalendarCell = defineComponent({
  name: 'RangeCalendarCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The specific day DateValue for this cell. */
    date: { type: Object as PropType<RangeCalendarCellProps['date']>, required: true },
    /** The current grid month DateValue — required by reka-ui to detect out-of-month days. */
    month: { type: Object as PropType<RangeCalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarCell
        date={props.date}
        data-slot="range-calendar-cell"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).cell(), props.class)}
      >
        <RekaRangeCalendarCellTrigger
          day={props.date}
          month={props.month}
          {...attrs}
          data-slot="range-calendar-cell-button"
          class="range-calendar__cell-button"
        >
          {{
            // reka-ui's RangeCalendarCellTrigger exposes the day label as
            // `dayValue`; forward it to consumers as `formattedDate` too
            // (HeroUI React's name) so either spelling works.
            default: (cellProps: { dayValue: string }) =>
              slots.default
                ? slots.default({ ...cellProps, formattedDate: cellProps.dayValue })
                : cellProps.dayValue
          }}
        </RekaRangeCalendarCellTrigger>
      </RekaRangeCalendarCell>
    )
  }
})

export default RangeCalendarCell
