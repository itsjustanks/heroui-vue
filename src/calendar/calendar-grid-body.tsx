import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarGridBody as RekaCalendarGridBody } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/** Calendar.GridBody — the `<tbody>` holding the week rows (HeroUI `calendar__grid-body`). */
export const CalendarGridBody = defineComponent({
  name: 'CalendarGridBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarGridBody
        {...attrs}
        data-slot="calendar-grid-body"
        class={cn((ctx?.slots.value ?? calendarVariants()).gridBody(), props.class)}
      >
        {slots.default?.()}
      </RekaCalendarGridBody>
    )
  }
})

export default CalendarGridBody
