import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronRight as IconChevronRight } from 'lucide-vue-next'
import { RangeCalendarNext as RekaRangeCalendarNext, useForwardProps } from 'reka-ui'
import type { RangeCalendarNextProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/**
 * RangeCalendarNextButton — steps the range calendar to the next page. HeroUI
 * v3 `RangeCalendar.Next`.
 *
 * Adapts HeroUI's `range-calendar__nav-button`: a compact `rounded-xl` icon
 * button. Uses the `ghost` button variant; reka-ui `data-disabled` handles the
 * disabled state.
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
        class={cn(
          buttonVariants({ variant: 'ghost' }),
          'size-7 rounded-xl p-0 text-muted-foreground hover:text-foreground',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconChevronRight class="size-4" />}
      </RekaRangeCalendarNext>
    )
  }
})

export default RangeCalendarNextButton
