import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarNext as RekaRangeCalendarNext } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * @deprecated Use `RangeCalendar.NavButton slot="next"` instead (HeroUI v3 API).
 * RangeCalendarNextButton — steps the calendar to the next page.
 */
export const RangeCalendarNextButton = defineComponent({
  name: 'RangeCalendarNextButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarNext
        {...attrs}
        data-slot="range-calendar-nav-button"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).navButton(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronRight data-slot="range-calendar-nav-button-icon" class={(ctx?.slots.value ?? rangeCalendarVariants()).navButtonIcon()} />}
      </RekaRangeCalendarNext>
    )
  }
})

export default RangeCalendarNextButton
