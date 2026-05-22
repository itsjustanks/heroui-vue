import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarHeadCell as RekaCalendarHeadCell, useForwardProps } from 'reka-ui'
import type { CalendarHeadCellProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarHeadCell — a single weekday `<th>`.
 *
 * HeroUI `calendar__header-cell`: centered `text-xs font-medium` muted label.
 */
export const CalendarHeadCell = defineComponent({
  name: 'CalendarHeadCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarHeadCellProps)
    return () => (
      <RekaCalendarHeadCell
        {...forwardedProps.value}
        class={cn('w-9 rounded-lg text-xs font-medium text-muted-foreground', props.class)}
      >
        {slots.default?.()}
      </RekaCalendarHeadCell>
    )
  }
})

export default CalendarHeadCell
