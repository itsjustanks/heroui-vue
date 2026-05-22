import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarHeading as RekaCalendarHeading, useForwardProps } from 'reka-ui'
import type { CalendarHeadingProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CalendarHeading — the month/year label.
 *
 * HeroUI `calendar__heading`: `flex-1 text-sm font-medium`. Exposes reka-ui's
 * `headingValue` scoped slot as a JSX render-prop child.
 */
export const CalendarHeading = defineComponent({
  name: 'CalendarHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as CalendarHeadingProps)
    return () => (
      <RekaCalendarHeading
        {...forwardedProps.value}
        class={cn('flex-1 text-sm font-medium', props.class)}
      >
        {{
          default: ({ headingValue }: { headingValue: string }) => (
            slots.default ? slots.default({ headingValue }) : headingValue
          )
        }}
      </RekaCalendarHeading>
    )
  }
})

export default CalendarHeading
