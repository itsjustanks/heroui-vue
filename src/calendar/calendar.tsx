import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { CalendarCell } from './calendar-cell'
import { CalendarCellTrigger } from './calendar-cell-trigger'
import { CalendarGrid } from './calendar-grid'
import { CalendarGridBody } from './calendar-grid-body'
import { CalendarGridHead } from './calendar-grid-head'
import { CalendarGridRow } from './calendar-grid-row'
import { CalendarHeadCell } from './calendar-head-cell'
import { CalendarHeader } from './calendar-header'
import { CalendarHeading } from './calendar-heading'
import { CalendarNextButton } from './calendar-next-button'
import { CalendarPrevButton } from './calendar-prev-button'

type TCalendarGridSlot = {
  grid: any[]
  weekDays: string[]
}

/**
 * Calendar — HeroUI-Vue calendar root (primitive library port).
 *
 * Faithful port of `shadcn/calendar` over reka-ui `CalendarRoot`, restyled to
 * HeroUI v3 taste (`rounded-lg` day cells, `bg-primary` selected, `bg-accent`
 * today). Keeps `@internationalized/date` as the date engine and forwards every
 * `CalendarRoot` prop/emit/v-model (`modelValue`, `placeholder`, `numberOfMonths`,
 * `minValue`, `maxValue`, `isDateDisabled`, `isDateUnavailable`, …).
 */
export const Calendar = defineComponent({
  name: 'CalendarRootView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <CalendarRoot
        {...(attrs as Record<string, any>)}
        class={cn('p-3', props.class)}
      >
        {{
          default: ({ grid, weekDays }: TCalendarGridSlot) => (
            <>
              <CalendarHeader>
                <CalendarPrevButton />
                <CalendarHeading />
                <CalendarNextButton />
              </CalendarHeader>

              <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                {grid.map((month) => (
                  <CalendarGrid key={month.value.toString()}>
                    <CalendarGridHead>
                      <CalendarGridRow>
                        {weekDays.map((day) => (
                          <CalendarHeadCell key={day}>{day}</CalendarHeadCell>
                        ))}
                      </CalendarGridRow>
                    </CalendarGridHead>
                    <CalendarGridBody>
                      {month.rows.map((weekDates: any[], index: number) => (
                        <CalendarGridRow key={`weekDate-${index}`} class="mt-2 w-full">
                          {weekDates.map((weekDate) => (
                            <CalendarCell key={weekDate.toString()} date={weekDate}>
                              <CalendarCellTrigger day={weekDate} month={month.value} />
                            </CalendarCell>
                          ))}
                        </CalendarGridRow>
                      ))}
                    </CalendarGridBody>
                  </CalendarGrid>
                ))}
              </div>
            </>
          )
        }}
      </CalendarRoot>
    )
  }
})

export default Calendar
