import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridBody as RekaRangeCalendarGridBody } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/** RangeCalendar.GridBody — the `<tbody>` holding the week rows (HeroUI `range-calendar__grid-body`). */
export const RangeCalendarGridBody = defineComponent({
  name: 'RangeCalendarGridBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarGridBody
        {...attrs}
        data-slot="range-calendar-grid-body"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).gridBody(), props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarGridBody>
    )
  }
})

export default RangeCalendarGridBody
