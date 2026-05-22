import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarHeader as RekaCalendarHeader } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/** Calendar.Header — the nav row above the grid (HeroUI `calendar__header`). */
export const CalendarHeader = defineComponent({
  name: 'CalendarHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarHeader
        {...attrs}
        data-slot="calendar-header"
        class={cn((ctx?.slots.value ?? calendarVariants()).header(), props.class)}
      >
        {slots.default?.()}
      </RekaCalendarHeader>
    )
  }
})

export default CalendarHeader
