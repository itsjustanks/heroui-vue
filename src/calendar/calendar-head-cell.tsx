import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarHeadCell as RekaCalendarHeadCell } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * @deprecated Use `CalendarHeaderCell` instead (HeroUI v3 API).
 * Calendar.HeaderCell — a weekday `<th>` column header (HeroUI `calendar__header-cell`).
 */
export const CalendarHeadCell = defineComponent({
  name: 'CalendarHeadCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarHeadCell
        {...attrs}
        data-slot="calendar-header-cell"
        class={cn((ctx?.slots.value ?? calendarVariants()).headerCell(), props.class)}
      >
        {slots.default?.()}
      </RekaCalendarHeadCell>
    )
  }
})

export default CalendarHeadCell
