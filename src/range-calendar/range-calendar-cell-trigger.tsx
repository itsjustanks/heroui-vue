import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarCellTrigger as RekaRangeCalendarCellTrigger, useForwardProps } from 'reka-ui'
import type { RangeCalendarCellTriggerProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarCellTrigger — the pressable day button inside a cell. HeroUI v3
 * `RangeCalendar.CellTrigger`.
 *
 * Emits HeroUI BEM class `range-calendar__cell-button`. All interactive states
 * (today, selected, caps, disabled, unavailable, outside-month) are handled by
 * `range-calendar.css` via native pseudo-classes and data-attributes.
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
    const forwardedProps = useForwardProps(attrs as Omit<RangeCalendarCellTriggerProps, 'day' | 'month'>)
    return () => (
      <RekaRangeCalendarCellTrigger
        {...forwardedProps.value}
        day={props.day}
        month={props.month}
        class={cn('range-calendar__cell-button', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarCellTrigger>
    )
  }
})

export default RangeCalendarCellTrigger
