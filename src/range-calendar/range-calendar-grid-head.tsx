import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridHead as RekaRangeCalendarGridHead } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * @deprecated Use `RangeCalendarGridHeader` instead (HeroUI v3 API).
 * RangeCalendar.GridHeader — the `<thead>` holding the weekday row (HeroUI `range-calendar__grid-header`).
 */
export const RangeCalendarGridHead = defineComponent({
  name: 'RangeCalendarGridHead',
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

export default RangeCalendarGridHead
