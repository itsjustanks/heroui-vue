import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGrid as RekaRangeCalendarGrid, useForwardProps } from 'reka-ui'
import type { RangeCalendarGridProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarGrid — the `<table>` wrapping one month. HeroUI v3
 * `RangeCalendar.Grid`. Adapts HeroUI's `range-calendar__grid`.
 */
export const RangeCalendarGrid = defineComponent({
  name: 'RangeCalendarGrid',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarGridProps)
    return () => (
      <RekaRangeCalendarGrid
        {...forwardedProps.value}
        class={cn('range-calendar__grid', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarGrid>
    )
  }
})

export default RangeCalendarGrid
