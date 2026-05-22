import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronLeft as IconChevronLeft } from 'lucide-vue-next'
import { RangeCalendarPrev as RekaRangeCalendarPrev, useForwardProps } from 'reka-ui'
import type { RangeCalendarPrevProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarPrevButton — steps the range calendar to the previous page.
 * HeroUI v3 `RangeCalendar.Prev`.
 *
 * Emits HeroUI BEM class `range-calendar__nav-button`.
 */
export const RangeCalendarPrevButton = defineComponent({
  name: 'RangeCalendarPrevButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarPrevProps)
    return () => (
      <RekaRangeCalendarPrev
        {...forwardedProps.value}
        class={cn('range-calendar__nav-button', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronLeft class="range-calendar__nav-button-icon" />}
      </RekaRangeCalendarPrev>
    )
  }
})

export default RangeCalendarPrevButton
