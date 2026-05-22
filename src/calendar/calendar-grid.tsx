import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarGrid as RekaCalendarGrid, useForwardProps } from 'reka-ui'
import type { CalendarGridProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/** CalendarGrid — the `<table>` wrapping one month. HeroUI `calendar__grid`. */
export const CalendarGrid = defineComponent({
  name: 'CalendarGrid',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarGridProps)
    return () => (
      <RekaCalendarGrid
        {...forwardedProps.value}
        class={cn('calendar__grid', props.class)}
      >
        {slots.default?.()}
      </RekaCalendarGrid>
    )
  }
})

export default CalendarGrid
