import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarGrid as RekaCalendarGrid } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/** Calendar.Grid — the `<table>` wrapping one month (HeroUI `calendar__grid`). */
export const CalendarGrid = defineComponent({
  name: 'CalendarGrid',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarGrid
        {...attrs}
        data-slot="calendar-grid"
        class={cn((ctx?.slots.value ?? calendarVariants()).grid(), props.class)}
      >
        {slots.default?.()}
      </RekaCalendarGrid>
    )
  }
})

export default CalendarGrid
