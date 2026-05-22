import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarCellTrigger as RekaRangeCalendarCellTrigger } from 'reka-ui'
import type { RangeCalendarCellTriggerProps } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * RangeCalendarCellTrigger — the pressable button inside a range cell.
 *
 * @internal Used internally by `RangeCalendarCell`.  Exported for advanced
 * use-cases that need direct access to the reka-ui trigger primitive.
 * Prefer `RangeCalendar.Cell` for typical usage.
 */
export const RangeCalendarCellTrigger = defineComponent({
  name: 'RangeCalendarCellTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    day: { type: Object as PropType<RangeCalendarCellTriggerProps['day']>, required: true },
    month: { type: Object as PropType<RangeCalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarCellTrigger
        day={props.day}
        month={props.month}
        {...attrs}
        data-slot="range-calendar-cell-button"
        class={cn('range-calendar__cell-button', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarCellTrigger>
    )
  }
})

export default RangeCalendarCellTrigger
