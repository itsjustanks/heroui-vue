import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronLeft as IconChevronLeft } from 'lucide-vue-next'
import { RangeCalendarPrev as RekaRangeCalendarPrev, useForwardProps } from 'reka-ui'
import type { RangeCalendarPrevProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/**
 * RangeCalendarPrevButton — steps the range calendar to the previous page.
 * HeroUI v3 `RangeCalendar.Prev`.
 *
 * Adapts HeroUI's `range-calendar__nav-button`: a compact `rounded-xl` icon
 * button. Uses the `ghost` button variant; reka-ui `data-disabled` handles the
 * disabled state.
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
        class={cn(
          buttonVariants({ variant: 'ghost' }),
          'size-7 rounded-xl p-0 text-muted-foreground hover:text-foreground',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconChevronLeft class="size-4" />}
      </RekaRangeCalendarPrev>
    )
  }
})

export default RangeCalendarPrevButton
