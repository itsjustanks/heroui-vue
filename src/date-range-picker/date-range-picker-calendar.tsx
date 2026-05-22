import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronLeft as IconChevronLeft, ChevronRight as IconChevronRight } from 'lucide-vue-next'
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
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

type TCalendarSlot = {
  grid: Array<{ value: { toString: () => string }; rows: unknown[][] }>
  weekDays: string[]
}

/**
 * DateRangePickerCalendar — the range month grid inside `DateRangePickerContent`.
 * HeroUI v3 `RangeCalendar` (as used inside `DateRangePicker`).
 *
 * Composes reka-ui's `DateRangePicker`-scoped calendar parts (context-wired to
 * `DateRangePickerRoot`). Range styling adapts HeroUI's `range-calendar`:
 * `bg-accent` connected in-range band (`data-highlighted` / `data-selected`),
 * `bg-primary` rounded endpoints (`data-selection-start` / `data-selection-end`),
 * `bg-accent` today, muted outside-month days.
 */
export const DateRangePickerCalendar = defineComponent({
  name: 'DateRangePickerCalendar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaDateRangePickerCalendar {...attrs} class={cn('p-0', props.class)}>
        {{
          default: ({ grid, weekDays }: TCalendarSlot) => (
            <>
              <DateRangePickerHeader class="relative flex w-full items-center justify-between px-0.5 pb-4 pt-1">
                <DateRangePickerPrev
                  class={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'size-7 rounded-lg p-0 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <IconChevronLeft class="size-4" />
                </DateRangePickerPrev>
                <DateRangePickerHeading class="flex-1 text-center text-sm font-medium" />
                <DateRangePickerNext
                  class={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'size-7 rounded-lg p-0 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <IconChevronRight class="size-4" />
                </DateRangePickerNext>
              </DateRangePickerHeader>

              <div class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                {grid.map((month) => (
                  <DateRangePickerGrid
                    key={month.value.toString()}
                    class="w-full border-collapse space-y-1"
                  >
                    <DateRangePickerGridHead>
                      <DateRangePickerGridRow class="flex">
                        {weekDays.map((day) => (
                          <DateRangePickerHeadCell
                            key={day}
                            class="w-9 rounded-lg text-xs font-medium text-muted-foreground"
                          >
                            {day}
                          </DateRangePickerHeadCell>
                        ))}
                      </DateRangePickerGridRow>
                    </DateRangePickerGridHead>
                    <DateRangePickerGridBody>
                      {month.rows.map((weekDates, index) => (
                        <DateRangePickerGridRow key={`weekDate-${index}`} class="mt-2 flex w-full">
                          {(weekDates as Array<{ toString: () => string }>).map((weekDate) => (
                            <DateRangePickerCell
                              key={weekDate.toString()}
                              date={weekDate as never}
                              class={cn(
                                'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20',
                                // In-range band — connected accent fill.
                                '[&:has([data-selected])]:bg-accent',
                                '[&:has([data-selection-start])]:rounded-l-lg [&:has([data-selection-end])]:rounded-r-lg',
                                '[&:has([data-outside-view][data-selected])]:bg-accent/50'
                              )}
                            >
                              <DateRangePickerCellTrigger
                                day={weekDate as never}
                                month={month.value as never}
                                class={cn(
                                  buttonVariants({ variant: 'ghost' }),
                                  'size-9 rounded-lg p-0 font-normal',
                                  // Today
                                  '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
                                  // In-range middle days — keep them flat over the band.
                                  'data-[highlighted]:rounded-none data-[selected]:rounded-none',
                                  // Range endpoints — solid primary, rounded.
                                  'data-[selection-start]:rounded-lg data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground',
                                  'data-[selection-end]:rounded-lg data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground',
                                  // Disabled / unavailable
                                  'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
                                  'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
                                  // Outside months
                                  'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50'
                                )}
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
