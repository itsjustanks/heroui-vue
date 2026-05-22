import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import {
  DatePickerCalendar as RekaDatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerNext,
  DatePickerPrev,
} from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { IconChevronLeft, IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'

type GridMonth = { value: { toString: () => string }; rows: Array<Array<{ toString: () => string }>> }
type CalendarSlot = { grid: GridMonth[]; weekDays: string[] }

/**
 * DatePickerCalendar — the month grid rendered inside `DatePicker.Popover`.
 *
 * reka-ui scopes the calendar primitives per picker (`DatePickerCalendar`,
 * `DatePickerCell`, …) so they wire to `DatePickerRoot`'s value; the standalone
 * `Calendar` cannot. This component therefore composes the reka-ui
 * `DatePicker`-scoped parts while applying the exact `calendarVariants` slot
 * classes and `data-slot` attributes of the standalone `Calendar` — keeping the
 * rendered DOM identical to HeroUI's `<Calendar>` inside `DatePicker.Popover`.
 */
export const DatePickerCalendar = defineComponent({
  name: 'DatePickerCalendar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs }) {
    const s = calendarVariants()

    return () => (
      <RekaDatePickerCalendar {...attrs} data-slot="calendar" class={cn(s.base(), props.class)}>
        {{
          default: ({ grid, weekDays }: CalendarSlot) => (
            <>
              <DatePickerHeader data-slot="calendar-header" class={s.header()}>
                <DatePickerHeading data-slot="calendar-heading" class={s.heading()} />
                <DatePickerPrev data-slot="calendar-nav-button" class={s.navButton()}>
                  <IconChevronLeft data-slot="calendar-nav-button-icon" class={s.navButtonIcon()} />
                </DatePickerPrev>
                <DatePickerNext data-slot="calendar-nav-button" class={s.navButton()}>
                  <IconChevronRight data-slot="calendar-nav-button-icon" class={s.navButtonIcon()} />
                </DatePickerNext>
              </DatePickerHeader>
              {grid.map((month) => (
                <DatePickerGrid
                  key={month.value.toString()}
                  data-slot="calendar-grid"
                  class={s.grid()}
                >
                  <DatePickerGridHead data-slot="calendar-grid-header" class={s.gridHeader()}>
                    <DatePickerGridRow class={s.gridRow()}>
                      {weekDays.map((day) => (
                        <DatePickerHeadCell
                          key={day}
                          data-slot="calendar-header-cell"
                          class={s.headerCell()}
                        >
                          {day}
                        </DatePickerHeadCell>
                      ))}
                    </DatePickerGridRow>
                  </DatePickerGridHead>
                  <DatePickerGridBody data-slot="calendar-grid-body" class={s.gridBody()}>
                    {month.rows.map((week, i) => (
                      <DatePickerGridRow key={`week-${i}`} class={s.gridRow()}>
                        {week.map((day) => (
                          <DatePickerCell
                            key={day.toString()}
                            date={day as never}
                          >
                            <DatePickerCellTrigger
                              day={day as never}
                              month={month.value as never}
                              data-slot="calendar-cell"
                              class={s.cell()}
                            >
                              {{
                                default: ({ formattedDate }: { formattedDate: string }) => (
                                  <span
                                    aria-hidden="true"
                                    data-slot="calendar-cell-indicator"
                                    class={s.cellIndicator()}
                                  >
                                    {formattedDate}
                                  </span>
                                ),
                              }}
                            </DatePickerCellTrigger>
                          </DatePickerCell>
                        ))}
                      </DatePickerGridRow>
                    ))}
                  </DatePickerGridBody>
                </DatePickerGrid>
              ))}
            </>
          ),
        }}
      </RekaDatePickerCalendar>
    )
  },
})

export default DatePickerCalendar
