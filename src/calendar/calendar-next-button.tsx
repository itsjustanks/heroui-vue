import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronRight as IconChevronRight } from 'lucide-vue-next'
import { CalendarNext as RekaCalendarNext, useForwardProps } from 'reka-ui'
import type { CalendarNextProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/**
 * CalendarNextButton — steps the calendar to the next page.
 *
 * HeroUI `calendar__nav-button`: a compact `rounded-lg` icon button. Uses the
 * `ghost` button variant; reka-ui `data-disabled` handles the disabled state.
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
        class={cn(
          buttonVariants({ variant: 'ghost' }),
          'size-7 rounded-lg p-0 text-muted-foreground hover:text-foreground',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconChevronRight class="size-4" />}
      </RekaCalendarNext>
    )
  }
})

export default CalendarNextButton
