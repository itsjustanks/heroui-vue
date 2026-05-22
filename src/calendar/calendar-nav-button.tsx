import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CalendarNext as RekaCalendarNext, CalendarPrev as RekaCalendarPrev } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { IconChevronLeft, IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * Calendar.NavButton — previous/next navigation button.
 *
 * Mirrors HeroUI React `CalendarNavButton` which uses a `slot` prop
 * (`"previous"` | `"next"`) to select direction.  Renders the matching
 * reka-ui primitive (`CalendarPrev` / `CalendarNext`) and injects the default
 * chevron icon when no child is provided.
 */
export const CalendarNavButton = defineComponent({
  name: 'CalendarNavButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** `"previous"` renders `CalendarPrev`; `"next"` renders `CalendarNext`. */
    slot: { type: String as PropType<'previous' | 'next'>, default: 'previous' }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CALENDAR_CONTEXT, null)
    return () => {
      const navClass = cn((ctx?.slots.value ?? calendarVariants()).navButton(), props.class)
      const icon = props.slot === 'next'
        ? <IconChevronRight data-slot="calendar-nav-button-icon" class={(ctx?.slots.value ?? calendarVariants()).navButtonIcon()} />
        : <IconChevronLeft data-slot="calendar-nav-button-icon" class={(ctx?.slots.value ?? calendarVariants()).navButtonIcon()} />
      const children = slots.default ? slots.default() : icon

      return props.slot === 'next'
        ? (
          <RekaCalendarNext {...attrs} data-slot="calendar-nav-button" class={navClass}>
            {children}
          </RekaCalendarNext>
        )
        : (
          <RekaCalendarPrev {...attrs} data-slot="calendar-nav-button" class={navClass}>
            {children}
          </RekaCalendarPrev>
        )
    }
  }
})

export default CalendarNavButton
