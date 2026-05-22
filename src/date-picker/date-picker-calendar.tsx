import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconChevronLeft, IconChevronRight } from '@/icons'
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
  DatePickerPrev
} from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

type TCalendarSlot = {
  grid: Array<{ value: { toString: () => string }; rows: unknown[][] }>
  weekDays: string[]
}

/**
 * DatePickerCalendar — the month grid inside `DatePickerContent`. HeroUI v3
 * `Calendar` (as used inside `DatePicker`).
 *
 * Composes reka-ui's `DatePicker`-scoped calendar parts (context-wired to
 * `DatePickerRoot`) and applies the exact same HeroUI v3 styling as the
 * standalone `calendar` primitive — `rounded-lg` day cells, `bg-primary`
 * selected, `bg-accent` today, muted outside-month days — keyed to reka-ui's
 * `data-selected` / `data-today` / `data-disabled` / `data-outside-view`.
 */
export const DatePickerCalendar = defineComponent({
  name: 'DatePickerCalendar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaDatePickerCalendar {...attrs} class={cn('p-0', props.class)}>
        {{
          default: ({ grid, weekDays }: TCalendarSlot) => (
            <>
              <DatePickerHeader class="relative flex w-full items-center justify-between px-0.5 pb-4 pt-1">
                <DatePickerPrev
                  class={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'size-7 rounded-lg p-0 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <IconChevronLeft class="size-4" />
                </DatePickerPrev>
                <DatePickerHeading class="flex-1 text-center text-sm font-medium" />
                <DatePickerNext
                  class={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'size-7 rounded-lg p-0 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <IconChevronRight class="size-4" />
                </DatePickerNext>
              </DatePickerHeader>

              <div class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                {grid.map((month) => (
                  <DatePickerGrid key={month.value.toString()} class="w-full border-collapse space-y-1">
                    <DatePickerGridHead>
                      <DatePickerGridRow class="flex">
                        {weekDays.map((day) => (
                          <DatePickerHeadCell
                            key={day}
                            class="w-9 rounded-lg text-xs font-medium text-muted-foreground"
                          >
                            {day}
                          </DatePickerHeadCell>
                        ))}
                      </DatePickerGridRow>
                    </DatePickerGridHead>
                    <DatePickerGridBody>
                      {month.rows.map((weekDates, index) => (
                        <DatePickerGridRow key={`weekDate-${index}`} class="mt-2 flex w-full">
                          {(weekDates as Array<{ toString: () => string }>).map((weekDate) => (
                            <DatePickerCell
                              key={weekDate.toString()}
                              date={weekDate as never}
                              class={cn(
                                'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20',
                                '[&:has([data-selected])]:rounded-lg [&:has([data-selected])]:bg-accent',
                                '[&:has([data-selected][data-outside-view])]:bg-accent/50'
                              )}
                            >
                              <DatePickerCellTrigger
                                day={weekDate as never}
                                month={month.value as never}
                                class={cn(
                                  buttonVariants({ variant: 'ghost' }),
                                  'size-9 rounded-lg p-0 font-normal',
                                  '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
                                  'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
                                  'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
                                  'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
                                  'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50'
                                )}
                              />
                            </DatePickerCell>
                          ))}
                        </DatePickerGridRow>
                      ))}
                    </DatePickerGridBody>
                  </DatePickerGrid>
                ))}
              </div>
            </>
          )
        }}
      </RekaDatePickerCalendar>
    )
  }
})

export default DatePickerCalendar
