import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronLeft as IconChevronLeft } from 'lucide-vue-next'
import { CalendarPrev as RekaCalendarPrev, useForwardProps } from 'reka-ui'
import type { CalendarPrevProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarPrevButton — steps the calendar to the previous page.
 *
 * HeroUI v3 BEM: `calendar__nav-button`.
 */
export const CalendarPrevButton = defineComponent({
  name: 'CalendarPrevButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarPrevProps)
    return () => (
      <RekaCalendarPrev
        {...forwardedProps.value}
        class={cn('calendar__nav-button', props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronLeft class="calendar__nav-button-icon" />}
      </RekaCalendarPrev>
    )
  }
})

export default CalendarPrevButton
