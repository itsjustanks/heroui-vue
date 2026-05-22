import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGrid as RekaRangeCalendarGrid } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/** RangeCalendar.Grid — the `<table>` wrapping one month (HeroUI `range-calendar__grid`). */
export const RangeCalendarGrid = defineComponent({
  name: 'RangeCalendarGrid',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarGrid
        {...attrs}
        data-slot="range-calendar-grid"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).grid(), props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarGrid>
    )
  }
})

export default RangeCalendarGrid
