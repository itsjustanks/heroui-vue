import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarCellTrigger as RekaCalendarCellTrigger, useForwardProps } from 'reka-ui'
import type { CalendarCellTriggerProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarCellTrigger — the pressable day button inside a cell.
 *
 * HeroUI v3 BEM: `calendar__cell`. HeroUI's CSS uses native pseudo-classes
 * (`:hover`, `:focus-visible`, `:active`) and `data-selected`, `data-today`,
 * `data-disabled`, `data-unavailable`, `data-outside-month` data attributes
 * which reka-ui sets automatically.
 */
export const CalendarCellTrigger = defineComponent({
  name: 'CalendarCellTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    day: { type: Object as PropType<CalendarCellTriggerProps['day']>, required: true },
    month: { type: Object as PropType<CalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as Omit<CalendarCellTriggerProps, 'day' | 'month'>)
    return () => (
      <RekaCalendarCellTrigger
        {...forwardedProps.value}
        day={props.day}
        month={props.month}
        class={cn('calendar__cell', props.class)}
      >
        {slots.default?.()}
      </RekaCalendarCellTrigger>
    )
  }
})

export default CalendarCellTrigger
