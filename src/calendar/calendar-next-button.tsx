import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconChevronRight } from '@/icons'
import { CalendarNext as RekaCalendarNext, useForwardProps } from 'reka-ui'
import type { CalendarNextProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarNextButton — steps the calendar to the next page.
 *
 * HeroUI v3 BEM: `calendar__nav-button`.
 */
export const CalendarNextButton = defineComponent({
  name: 'CalendarNextButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarNextProps)
    return () => (
      <RekaCalendarNext
        {...forwardedProps.value}
        class={cn('calendar__nav-button', props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronRight class="calendar__nav-button-icon" />}
      </RekaCalendarNext>
    )
  }
})

export default CalendarNextButton
