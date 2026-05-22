import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import {
  DateRangePickerCalendar as RekaDateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerNext,
  DateRangePickerPrev,
} from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { IconChevronLeft, IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'

type GridMonth = { value: { toString: () => string }; rows: Array<Array<{ toString: () => string }>> }
type CalendarSlot = { grid: GridMonth[]; weekDays: string[] }

/**
 * DateRangePickerCalendar — the range month grid inside `DateRangePicker.Popover`.
 *
 * reka-ui scopes the range-calendar primitives per picker, so the standalone
 * `RangeCalendar` cannot wire to `DateRangePickerRoot`'s value. This component
 * composes the reka-ui `DateRangePicker`-scoped parts while applying the exact
 * `rangeCalendarVariants` slot classes and `data-slot` attributes of the
 * standalone `RangeCalendar`.
 */
export const DateRangePickerCalendar = defineComponent({
  name: 'DateRangePickerCalendar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs }) {
    const s = rangeCalendarVariants()

    return () => (
      <RekaDateRangePickerCalendar
        {...attrs}
        data-slot="range-calendar"
        class={cn(s.base(), props.class)}
      >
        {{
          default: ({ grid, weekDays }: CalendarSlot) => (
            <>
              <DateRangePickerHeader data-slot="range-calendar-header" class={s.header()}>
                <DateRangePickerHeading data-slot="range-calendar-heading" class={s.heading()} />
                <DateRangePickerPrev data-slot="range-calendar-nav-button" class={s.navButton()}>
                  <IconChevronLeft
                    data-slot="range-calendar-nav-button-icon"
                    class={s.navButtonIcon()}
                  />
                </DateRangePickerPrev>
                <DateRangePickerNext data-slot="range-calendar-nav-button" class={s.navButton()}>
                  <IconChevronRight
                    data-slot="range-calendar-nav-button-icon"
                    class={s.navButtonIcon()}
                  />
                </DateRangePickerNext>
              </DateRangePickerHeader>
              {grid.map((month) => (
                <DateRangePickerGrid
                  key={month.value.toString()}
                  data-slot="range-calendar-grid"
                  class={s.grid()}
                >
                  <DateRangePickerGridHead
                    data-slot="range-calendar-grid-header"
                    class={s.gridHeader()}
                  >
                    <DateRangePickerGridRow class={s.gridRow()}>
                      {weekDays.map((day) => (
                        <DateRangePickerHeadCell
                          key={day}
                          data-slot="range-calendar-header-cell"
                          class={s.headerCell()}
                        >
                          {day}
                        </DateRangePickerHeadCell>
                      ))}
                    </DateRangePickerGridRow>
                  </DateRangePickerGridHead>
                  <DateRangePickerGridBody
                    data-slot="range-calendar-grid-body"
                    class={s.gridBody()}
                  >
                    {month.rows.map((week, i) => (
                      <DateRangePickerGridRow key={`week-${i}`} class={s.gridRow()}>
                        {week.map((day) => (
                          <DateRangePickerCell
                            key={day.toString()}
                            date={day as never}
                            data-slot="range-calendar-cell"
                            class={s.cell()}
                          >
                            <DateRangePickerCellTrigger
                              day={day as never}
                              month={month.value as never}
                              data-slot="range-calendar-cell-button"
                              class="range-calendar__cell-button"
                            />
                          </DateRangePickerCell>
                        ))}
                      </DateRangePickerGridRow>
                    ))}
                  </DateRangePickerGridBody>
                </DateRangePickerGrid>
              ))}
            </>
          ),
        }}
      </RekaDateRangePickerCalendar>
    )
  },
})

export default DateRangePickerCalendar
