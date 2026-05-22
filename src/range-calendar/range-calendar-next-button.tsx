import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronRight as IconChevronRight } from 'lucide-vue-next'
import { RangeCalendarNext as RekaRangeCalendarNext, useForwardProps } from 'reka-ui'
import type { RangeCalendarNextProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarNextButton — steps the range calendar to the next page. HeroUI
 * v3 `RangeCalendar.Next`.
 *
 * Emits HeroUI BEM class `range-calendar__nav-button`.
 */
export const RangeCalendarNextButton = defineComponent({
  name: 'RangeCalendarNextButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarNextProps)
    return () => (
      <RekaRangeCalendarNext
        {...forwardedProps.value}
        class={cn('range-calendar__nav-button', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronRight class="range-calendar__nav-button-icon" />}
      </RekaRangeCalendarNext>
    )
  }
})

export default RangeCalendarNextButton
