import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarHeader as RekaCalendarHeader, useForwardProps } from 'reka-ui'
import type { CalendarHeaderProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarHeader — the nav row above the grid.
 *
 * HeroUI `calendar__header`: a flex row holding prev / heading / next, with
 * compact horizontal padding and bottom spacing.
 */
export const CalendarHeader = defineComponent({
  name: 'CalendarHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarHeaderProps)
    return () => (
      <RekaCalendarHeader
        {...forwardedProps.value}
        class={cn('relative flex w-full items-center justify-between px-0.5 pb-4 pt-1', props.class)}
      >
        {slots.default?.()}
      </RekaCalendarHeader>
    )
  }
})

export default CalendarHeader
