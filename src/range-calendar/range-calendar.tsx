import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarRoot, useForwardPropsEmits } from 'reka-ui'
import type { RangeCalendarRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { RangeCalendarCell } from './range-calendar-cell'
import { RangeCalendarCellTrigger } from './range-calendar-cell-trigger'
import { RangeCalendarGrid } from './range-calendar-grid'
import { RangeCalendarGridBody } from './range-calendar-grid-body'
import { RangeCalendarGridHead } from './range-calendar-grid-head'
import { RangeCalendarGridRow } from './range-calendar-grid-row'
import { RangeCalendarHeadCell } from './range-calendar-head-cell'
import { RangeCalendarHeader } from './range-calendar-header'
import { RangeCalendarHeading } from './range-calendar-heading'
import { RangeCalendarNextButton } from './range-calendar-next-button'
import { RangeCalendarPrevButton } from './range-calendar-prev-button'

type TRangeCalendarGridSlot = {
  grid: any[]
  weekDays: string[]
}

/**
 * RangeCalendar — HeroUI-Vue range-calendar root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `RangeCalendar` over reka-ui `RangeCalendarRoot`.
 * Mirrors `heroui/calendar`'s day-cell styling and adds the **connected-range
 * band** — a continuous track spanning the selected days, drawn by
 * `RangeCalendarCell`, with `bg-primary` caps on the start/end days. Keeps
 * `@internationalized/date` as the date engine and forwards every
 * `RangeCalendarRoot` prop/emit/v-model (`modelValue` as a `{ start, end }`
 * `DateRange`, `placeholder`, `numberOfMonths`, `minValue`, `maxValue`,
 * `allowNonContiguousRanges`, `maximumDays`, `fixedDate`, `isDateDisabled`,
 * `isDateUnavailable`, `isDateHighlightable`, …).
 *
 * Compound API: `RangeCalendar`, `RangeCalendarHeader`, `RangeCalendarHeading`,
 * `RangeCalendarPrevButton`, `RangeCalendarNextButton`, `RangeCalendarGrid`,
 * `RangeCalendarGridHead`, `RangeCalendarGridBody`, `RangeCalendarGridRow`,
 * `RangeCalendarHeadCell`, `RangeCalendarCell`, `RangeCalendarCellTrigger`.
 */
export const RangeCalendar = defineComponent({
  name: 'RangeCalendarRootView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  // reka-ui `RangeCalendarRoot` emits — declared as a string array so
  // `defineComponent`'s overload resolves and `useForwardPropsEmits` forwards.
  emits: ['update:modelValue', 'update:placeholder', 'update:validModelValue', 'update:startValue'],
  setup (props, { attrs, emit }) {
    const forwarded = useForwardPropsEmits(attrs as RangeCalendarRootProps, emit)
    return () => (
      <RangeCalendarRoot
        {...forwarded.value}
        class={cn('p-3', props.class)}
      >
        {{
          default: ({ grid, weekDays }: TRangeCalendarGridSlot) => (
            <>
              <RangeCalendarHeader>
                <RangeCalendarPrevButton />
                <RangeCalendarHeading />
                <RangeCalendarNextButton />
              </RangeCalendarHeader>

              <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                {grid.map((month) => (
                  <RangeCalendarGrid key={month.value.toString()}>
                    <RangeCalendarGridHead>
                      <RangeCalendarGridRow>
                        {weekDays.map((day) => (
                          <RangeCalendarHeadCell key={day}>{day}</RangeCalendarHeadCell>
                        ))}
                      </RangeCalendarGridRow>
                    </RangeCalendarGridHead>
                    <RangeCalendarGridBody>
                      {month.rows.map((weekDates: any[], index: number) => (
                        <RangeCalendarGridRow key={`weekDate-${index}`} class="mt-2 w-full">
                          {weekDates.map((weekDate) => (
                            <RangeCalendarCell key={weekDate.toString()} date={weekDate}>
                              <RangeCalendarCellTrigger day={weekDate} month={month.value} />
                            </RangeCalendarCell>
                          ))}
                        </RangeCalendarGridRow>
                      ))}
                    </RangeCalendarGridBody>
                  </RangeCalendarGrid>
                ))}
              </div>
            </>
          )
        }}
      </RangeCalendarRoot>
    )
  }
})

export default RangeCalendar
