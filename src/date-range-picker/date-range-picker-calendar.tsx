import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconChevronLeft, IconChevronRight } from '@/icons'
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
  DateRangePickerPrev
} from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

type TCalendarSlot = {
  grid: Array<{ value: { toString: () => string }; rows: unknown[][] }>
  weekDays: string[]
}

/**
 * DateRangePickerCalendar — the range month grid inside `DateRangePicker.Popover`.
 * Styled via `rangeCalendarVariants` (HeroUI's `RangeCalendar` BEM family). Composes
 * reka-ui's `DateRangePicker`-scoped calendar parts, which share context with the
 * `DateRangePickerRoot`.
 */
export const DateRangePickerCalendar = defineComponent({
  name: 'DateRangePickerCalendar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const styles = rangeCalendarVariants()
    return () => (
      <RekaDateRangePickerCalendar {...attrs} data-slot="range-calendar" class={cn(styles.base(), props.class)}>
        {{
          default: ({ grid, weekDays }: TCalendarSlot) => (
            <>
              <DateRangePickerHeader data-slot="range-calendar-header" class={cn(styles.header())}>
                <DateRangePickerPrev data-slot="range-calendar-nav-button" class={cn(styles.navButton())}>
                  <IconChevronLeft class={cn(styles.navButtonIcon())} />
                </DateRangePickerPrev>
                <DateRangePickerHeading data-slot="range-calendar-heading" class={cn(styles.heading())} />
                <DateRangePickerNext data-slot="range-calendar-nav-button" class={cn(styles.navButton())}>
                  <IconChevronRight class={cn(styles.navButtonIcon())} />
                </DateRangePickerNext>
              </DateRangePickerHeader>

              <div class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                {grid.map((month) => (
                  <DateRangePickerGrid
                    key={month.value.toString()}
                    data-slot="range-calendar-grid"
                    class={cn(styles.grid())}
                  >
                    <DateRangePickerGridHead data-slot="range-calendar-grid-header" class={cn(styles.gridHeader())}>
                      <DateRangePickerGridRow data-slot="range-calendar-grid-row" class={cn(styles.gridRow())}>
                        {weekDays.map((day) => (
                          <DateRangePickerHeadCell
                            key={day}
                            data-slot="range-calendar-header-cell"
                            class={cn(styles.headerCell())}
                          >
                            {day}
                          </DateRangePickerHeadCell>
                        ))}
                      </DateRangePickerGridRow>
                    </DateRangePickerGridHead>
                    <DateRangePickerGridBody data-slot="range-calendar-grid-body" class={cn(styles.gridBody())}>
                      {month.rows.map((weekDates, index) => (
                        <DateRangePickerGridRow
                          key={`weekDate-${index}`}
                          data-slot="range-calendar-grid-row"
                          class={cn(styles.gridRow())}
                        >
                          {(weekDates as Array<{ toString: () => string }>).map((weekDate) => (
                            <DateRangePickerCell
                              key={weekDate.toString()}
                              date={weekDate as never}
                              data-slot="range-calendar-cell"
                              class={cn(styles.cell())}
                            >
                              <DateRangePickerCellTrigger
                                day={weekDate as never}
                                month={month.value as never}
                                data-slot="range-calendar-cell-indicator"
                                class={cn(styles.cellIndicator())}
                              />
                            </DateRangePickerCell>
                          ))}
                        </DateRangePickerGridRow>
                      ))}
                    </DateRangePickerGridBody>
                  </DateRangePickerGrid>
                ))}
              </div>
            </>
          )
        }}
      </RekaDateRangePickerCalendar>
    )
  }
})

export default DateRangePickerCalendar
