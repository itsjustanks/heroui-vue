import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarHeader as RekaRangeCalendarHeader, useForwardProps } from 'reka-ui'
import type { RangeCalendarHeaderProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarHeader — the nav row above the grid. HeroUI v3
 * `RangeCalendar.Header`.
 *
 * Adapts HeroUI's `range-calendar__header`: a flex row holding prev / heading /
 * next, with compact horizontal padding and bottom spacing.
 */
export const RangeCalendarHeader = defineComponent({
  name: 'RangeCalendarHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarHeaderProps)
    return () => (
      <RekaRangeCalendarHeader
        {...forwardedProps.value}
        class={cn('relative flex w-full items-center justify-between px-0.5 pb-4 pt-1', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarHeader>
    )
  }
})

export default RangeCalendarHeader
