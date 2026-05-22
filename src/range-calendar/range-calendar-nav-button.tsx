import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarNext as RekaRangeCalendarNext, RangeCalendarPrev as RekaRangeCalendarPrev } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { IconChevronLeft, IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * RangeCalendar.NavButton — previous/next navigation button.
 *
 * Mirrors HeroUI React `RangeCalendarNavButton` which uses a `slot` prop
 * (`"previous"` | `"next"`) to select direction.  Renders the matching
 * reka-ui primitive (`RangeCalendarPrev` / `RangeCalendarNext`) and injects the
 * default chevron icon when no child is provided.
 */
export const RangeCalendarNavButton = defineComponent({
  name: 'RangeCalendarNavButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** `"previous"` renders `RangeCalendarPrev`; `"next"` renders `RangeCalendarNext`. */
    slot: { type: String as PropType<'previous' | 'next'>, default: 'previous' }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => {
      const navClass = cn((ctx?.slots.value ?? rangeCalendarVariants()).navButton(), props.class)
      const icon = props.slot === 'next'
        ? <IconChevronRight data-slot="range-calendar-nav-button-icon" class={(ctx?.slots.value ?? rangeCalendarVariants()).navButtonIcon()} />
        : <IconChevronLeft data-slot="range-calendar-nav-button-icon" class={(ctx?.slots.value ?? rangeCalendarVariants()).navButtonIcon()} />
      const children = slots.default ? slots.default() : icon

      return props.slot === 'next'
        ? (
          <RekaRangeCalendarNext {...attrs} data-slot="range-calendar-nav-button" class={navClass}>
            {children}
          </RekaRangeCalendarNext>
        )
        : (
          <RekaRangeCalendarPrev {...attrs} data-slot="range-calendar-nav-button" class={navClass}>
            {children}
          </RekaRangeCalendarPrev>
        )
    }
  }
})

export default RangeCalendarNavButton
