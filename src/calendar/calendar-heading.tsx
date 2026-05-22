import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarHeading as RekaCalendarHeading } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/** Calendar.Heading — the month/year label (HeroUI `calendar__heading`). */
export const CalendarHeading = defineComponent({
  name: 'CalendarHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarHeading
        {...attrs}
        data-slot="calendar-heading"
        class={cn((ctx?.slots.value ?? calendarVariants()).heading(), props.class)}
      >
        {{
          default: ({ headingValue }: { headingValue: string }) =>
            slots.default ? slots.default({ headingValue }) : headingValue
        }}
      </RekaCalendarHeading>
    )
  }
})

export default CalendarHeading
