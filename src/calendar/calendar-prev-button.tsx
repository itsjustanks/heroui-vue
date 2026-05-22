import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronLeft as IconChevronLeft } from 'lucide-vue-next'
import { CalendarPrev as RekaCalendarPrev, useForwardProps } from 'reka-ui'
import type { CalendarPrevProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/**
 * CalendarPrevButton — steps the calendar to the previous page.
 *
 * HeroUI `calendar__nav-button`: a compact `rounded-lg` icon button. Uses the
 * `ghost` button variant; reka-ui `data-disabled` handles the disabled state.
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
        class={cn(
          buttonVariants({ variant: 'ghost' }),
          'size-7 rounded-lg p-0 text-muted-foreground hover:text-foreground',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconChevronLeft class="size-4" />}
      </RekaCalendarPrev>
    )
  }
})

export default CalendarPrevButton
