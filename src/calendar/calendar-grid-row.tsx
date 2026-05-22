import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarGridRow as RekaCalendarGridRow, useForwardProps } from 'reka-ui'
import type { CalendarGridRowProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/** CalendarGridRow — a single `<tr>`, a flex row of cells. */
export const CalendarGridRow = defineComponent({
  name: 'CalendarGridRow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarGridRowProps)
    return () => (
      <RekaCalendarGridRow
        {...forwardedProps.value}
        class={cn('calendar__grid-row', props.class)}
      >
        {slots.default?.()}
      </RekaCalendarGridRow>
    )
  }
})

export default CalendarGridRow
