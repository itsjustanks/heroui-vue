import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarCell as RekaRangeCalendarCell, useForwardProps } from 'reka-ui'
import type { RangeCalendarCellProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarCell — the `<td>` wrapping one day's trigger. HeroUI v3
 * `RangeCalendar.Cell`.
 *
 * This part draws the **connected-range band**. Adapting HeroUI's
 * `range-calendar__cell` BEM: a cell whose descendant carries `[data-selected]`
 * gets a continuous `bg-accent/40` track; the row boundaries and the
 * start/end caps round off so the band reads as one capsule across weeks.
 * reka-ui surfaces `data-selected` / `data-selection-start` /
 * `data-selection-end` / `data-outside-view` on the cell trigger, so the band
 * is keyed off `&:has(...)` descendant selectors.
 */
export const RangeCalendarCell = defineComponent({
  name: 'RangeCalendarCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    date: { type: Object as PropType<RangeCalendarCellProps['date']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as Omit<RangeCalendarCellProps, 'date'>)
    return () => (
      <RekaRangeCalendarCell
        {...forwardedProps.value}
        date={props.date}
        class={cn('range-calendar__cell', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarCell>
    )
  }
})

export default RangeCalendarCell
