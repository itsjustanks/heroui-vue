import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarHeader as RekaRangeCalendarHeader } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/** RangeCalendar.Header — the nav row above the grid (HeroUI `range-calendar__header`). */
export const RangeCalendarHeader = defineComponent({
  name: 'RangeCalendarHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarHeader
        {...attrs}
        data-slot="range-calendar-header"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).header(), props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarHeader>
    )
  }
})

export default RangeCalendarHeader
