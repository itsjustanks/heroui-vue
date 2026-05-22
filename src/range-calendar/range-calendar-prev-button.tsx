import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarPrev as RekaRangeCalendarPrev } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { IconChevronLeft } from '@/icons'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * @deprecated Use `RangeCalendar.NavButton slot="previous"` instead (HeroUI v3 API).
 * RangeCalendarPrevButton — steps the calendar to the previous page.
 */
export const RangeCalendarPrevButton = defineComponent({
  name: 'RangeCalendarPrevButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RANGE_CALENDAR_CONTEXT, null)
    return () => (
      <RekaRangeCalendarPrev
        {...attrs}
        data-slot="range-calendar-nav-button"
        class={cn((ctx?.slots.value ?? rangeCalendarVariants()).navButton(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronLeft data-slot="range-calendar-nav-button-icon" class={(ctx?.slots.value ?? rangeCalendarVariants()).navButtonIcon()} />}
      </RekaRangeCalendarPrev>
    )
  }
})

export default RangeCalendarPrevButton
