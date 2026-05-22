import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarHeadCell as RekaRangeCalendarHeadCell } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * @deprecated Use `RangeCalendarHeaderCell` instead (HeroUI v3 API).
 * RangeCalendar.HeaderCell — a weekday `<th>` column header (HeroUI `range-calendar__header-cell`).
 */
export const RangeCalendarHeadCell = defineComponent({
  name: 'RangeCalendarHeadCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarHeadCell
        {...attrs}
        data-slot="range-calendar-header-cell"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).headerCell(), props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarHeadCell>
    )
  }
})

export default RangeCalendarHeadCell
