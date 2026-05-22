import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridRow as RekaRangeCalendarGridRow } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/** RangeCalendar.GridRow — a `<tr>` week row (HeroUI `range-calendar__grid-row`). */
export const RangeCalendarGridRow = defineComponent({
  name: 'RangeCalendarGridRow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarGridRow
        {...attrs}
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).gridRow(), props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarGridRow>
    )
  }
})

export default RangeCalendarGridRow
