import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarGridHead as RekaCalendarGridHead } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/** Calendar.GridHeader — the `<thead>` holding the weekday row (HeroUI `calendar__grid-header`). */
export const CalendarGridHeader = defineComponent({
  name: 'CalendarGridHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarGridHead
        {...attrs}
        data-slot="calendar-grid-header"
        class={cn((ctx?.slots.value ?? calendarVariants()).gridHeader(), props.class)}
      >
        {slots.default?.()}
      </RekaCalendarGridHead>
    )
  }
})

export default CalendarGridHeader
