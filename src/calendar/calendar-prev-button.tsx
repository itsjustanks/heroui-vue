import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarPrev as RekaCalendarPrev } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { IconChevronLeft } from '@/icons'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * @deprecated Use `Calendar.NavButton slot="previous"` instead (HeroUI v3 API).
 * CalendarPrevButton — steps the calendar to the previous page.
 */
export const CalendarPrevButton = defineComponent({
  name: 'CalendarPrevButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => (
      <RekaCalendarPrev
        {...attrs}
        data-slot="calendar-nav-button"
        class={cn((ctx?.slots.value ?? calendarVariants()).navButton(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronLeft data-slot="calendar-nav-button-icon" class={(ctx?.slots.value ?? calendarVariants()).navButtonIcon()} />}
      </RekaCalendarPrev>
    )
  }
})

export default CalendarPrevButton
