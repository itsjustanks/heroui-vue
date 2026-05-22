import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarHeading as RekaRangeCalendarHeading } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/** RangeCalendar.Heading — the month/year label (HeroUI `range-calendar__heading`). */
export const RangeCalendarHeading = defineComponent({
  name: 'RangeCalendarHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarHeading
        {...attrs}
        data-slot="range-calendar-heading"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).heading(), props.class)}
      >
        {{
          default: ({ headingValue }: { headingValue: string }) =>
            slots.default ? slots.default({ headingValue }) : headingValue
        }}
      </RekaRangeCalendarHeading>
    )
  }
})

export default RangeCalendarHeading
