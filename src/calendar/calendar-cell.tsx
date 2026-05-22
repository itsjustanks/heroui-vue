import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarCell as RekaCalendarCell, useForwardProps } from 'reka-ui'
import type { CalendarCellProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarCell — the `<td>` wrapping one day's trigger.
 *
 * HeroUI `calendar__cell` wrapper: `rounded-lg` selected-day highlight via the
 * reka-ui `[data-selected]` / `[data-outside-view]` descendant attributes.
 */
export const CalendarCell = defineComponent({
  name: 'CalendarCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    date: { type: Object as PropType<CalendarCellProps['date']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as Omit<CalendarCellProps, 'date'>)
    return () => (
      <RekaCalendarCell
        {...forwardedProps.value}
        date={props.date}
        class={cn(
          'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20',
          '[&:has([data-selected])]:rounded-lg [&:has([data-selected])]:bg-accent',
          '[&:has([data-selected][data-outside-view])]:bg-accent/50',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaCalendarCell>
    )
  }
})

export default CalendarCell
