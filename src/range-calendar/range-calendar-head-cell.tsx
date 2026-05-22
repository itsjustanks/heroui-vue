import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarHeadCell as RekaRangeCalendarHeadCell, useForwardProps } from 'reka-ui'
import type { RangeCalendarHeadCellProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarHeadCell — a single weekday `<th>`. HeroUI v3
 * `RangeCalendar.HeadCell`.
 *
 * Adapts HeroUI's `range-calendar__header-cell`: a centered `text-xs
 * font-medium` muted label.
 */
export const RangeCalendarHeadCell = defineComponent({
  name: 'RangeCalendarHeadCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarHeadCellProps)
    return () => (
      <RekaRangeCalendarHeadCell
        {...forwardedProps.value}
        class={cn('range-calendar__header-cell', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarHeadCell>
    )
  }
})

export default RangeCalendarHeadCell
