import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { CalendarRoot as RekaCalendarRoot } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CALENDAR_CONTEXT } from './calendar-context'

/**
 * CalendarRoot — the surface container. Faithful Vue port of HeroUI v3 `Calendar`.
 *
 * Computes the `calendarVariants` slot map and provides it via context so every
 * compound part (`Calendar.Header`, `Calendar.NavButton`, …) sources its class
 * from `@heroui/styles` rather than a hand-written string.
 *
 * All reka-ui `CalendarRoot` props/emits (modelValue, placeholder, minValue,
 * maxValue, numberOfMonths, isDateDisabled, isDateUnavailable, …) are forwarded
 * via `attrs`.
 */
export const CalendarRoot = defineComponent({
  name: 'CalendarRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => calendarVariants())
    provide(CALENDAR_CONTEXT, { slots: styles })

    return () => (
      <RekaCalendarRoot
        {...(attrs as Record<string, any>)}
        data-slot="calendar"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default}
      </RekaCalendarRoot>
    )
  }
})

export default CalendarRoot
