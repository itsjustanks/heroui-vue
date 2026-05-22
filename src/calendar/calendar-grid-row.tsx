import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarGridRow as RekaCalendarGridRow } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/** Calendar.GridRow — a `<tr>` week row (HeroUI `calendar__grid-row`). */
export const CalendarGridRow = defineComponent({
  name: 'CalendarGridRow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarGridRow
        {...attrs}
        class={cn((ctx?.slots.value ?? calendarVariants()).gridRow(), props.class)}
      >
        {slots.default?.()}
      </RekaCalendarGridRow>
    )
  }
})

export default CalendarGridRow
