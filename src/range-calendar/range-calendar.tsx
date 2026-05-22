import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarRoot as RekaRangeCalendarRoot } from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'

/**
 * RangeCalendarRoot — the surface container. Faithful Vue port of HeroUI v3 `RangeCalendar`.
 *
 * Computes the `rangeCalendarVariants` slot map and provides it via context so
 * every compound part (`RangeCalendar.Header`, `RangeCalendar.NavButton`, …)
 * sources its class from `@heroui/styles` — never a hand-written string.
 *
 * All reka-ui `RangeCalendarRoot` props/emits (modelValue as `{ start, end }`
 * DateRange, placeholder, minValue, maxValue, numberOfMonths, isDateDisabled,
 * isDateUnavailable, …) are forwarded via `attrs`.
 */
export const RangeCalendarRoot = defineComponent({
  name: 'RangeCalendarRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => rangeCalendarVariants())
    provide(RANGE_CALENDAR_CONTEXT, { slots: styles })

    return () => (
      <RekaRangeCalendarRoot
        {...(attrs as Record<string, any>)}
        data-slot="range-calendar"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default}
      </RekaRangeCalendarRoot>
    )
  }
})

export default RangeCalendarRoot
