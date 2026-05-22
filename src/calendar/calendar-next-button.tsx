import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarNext as RekaCalendarNext } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * @deprecated Use `Calendar.NavButton slot="next"` instead (HeroUI v3 API).
 * CalendarNextButton — steps the calendar to the next page.
 */
export const CalendarNextButton = defineComponent({
  name: 'CalendarNextButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarNext
        {...attrs}
        data-slot="calendar-nav-button"
        class={cn((ctx?.slots.value ?? calendarVariants()).navButton(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronRight data-slot="calendar-nav-button-icon" class={(ctx?.slots.value ?? calendarVariants()).navButtonIcon()} />}
      </RekaCalendarNext>
    )
  }
})

export default CalendarNextButton
