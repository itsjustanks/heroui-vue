import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarHeading as RekaRangeCalendarHeading, useForwardProps } from 'reka-ui'
import type { RangeCalendarHeadingProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RangeCalendarHeading — the month/year label. HeroUI v3 `RangeCalendar.Heading`.
 *
 * Adapts HeroUI's `range-calendar__heading`: `flex-1 text-sm font-medium`.
 * Exposes reka-ui's `headingValue` scoped slot as a JSX render-prop child.
 */
export const RangeCalendarHeading = defineComponent({
  name: 'RangeCalendarHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarHeadingProps)
    return () => (
      <RekaRangeCalendarHeading
        {...forwardedProps.value}
        class={cn('flex-1 text-sm font-medium', props.class)}
      >
        {{
          default: ({ headingValue }: { headingValue: string }) => (
            slots.default ? slots.default({ headingValue }) : headingValue
          )
        }}
      </RekaRangeCalendarHeading>
    )
  }
})

export default RangeCalendarHeading
