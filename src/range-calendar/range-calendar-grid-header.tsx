import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridHead as RekaRangeCalendarGridHead } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/** RangeCalendar.GridHeader — the `<thead>` holding the weekday row (HeroUI `range-calendar__grid-header`). */
export const RangeCalendarGridHeader = defineComponent({
  name: 'RangeCalendarGridHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarGridHead
        {...attrs}
        data-slot="range-calendar-grid-header"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).gridHeader(), props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarGridHead>
    )
  }
})

export default RangeCalendarGridHeader
