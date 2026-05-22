import { computed, defineComponent, provide, inject, ref, type PropType } from 'vue'
import { CalendarRoot as RekaCalendarRoot, DatePickerCalendar as RekaDatePickerCalendar } from 'reka-ui'
import { calendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps } from '@/lib/react-compat'
import { provideYearPicker } from '@/calendar-year-picker/year-picker-context'
import { CALENDAR_CONTEXT } from './calendar-context'
import { DATE_PICKER_CONTEXT } from '@/date-picker/date-picker-context'

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
 *
 * When nested inside a `DatePicker.Popover` (detected via `DATE_PICKER_CONTEXT`),
 * `Calendar` renders reka-ui's `DatePickerCalendar` instead of a bare
 * `CalendarRoot`. reka-ui scopes its calendar to the picker — `DatePickerCalendar`
 * IS a `CalendarRoot` wired to the `DatePickerRoot` value — so every generic
 * `Calendar.*` part continues to work, and `DatePicker.Popover` composes with
 * the standalone `Calendar` exactly as HeroUI React does.
 */
export const CalendarRoot = defineComponent({
  name: 'CalendarRoot',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    defaultYearPickerOpen: { type: Boolean, default: false },
    isYearPickerOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    onYearPickerOpenChange: { type: Function as PropType<(isYearPickerOpen: boolean) => void>, default: undefined }
  },
  emits: {
    'update:isYearPickerOpen': (_open: boolean) => true,
    yearPickerOpenChange: (_open: boolean) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => calendarVariants())
    provide(CALENDAR_CONTEXT, { slots: styles })
    const internalYearPickerOpen = ref(props.defaultYearPickerOpen)
    const isYearPickerOpen = computed({
      get: () => props.isYearPickerOpen ?? internalYearPickerOpen.value,
      set: (open) => {
        internalYearPickerOpen.value = open
        props.onYearPickerOpenChange?.(open)
        emit('update:isYearPickerOpen', open)
        emit('yearPickerOpenChange', open)
      }
    })
    provideYearPicker({
      calendarGridSlot: 'calendar-grid',
      isYearPickerOpen,
      setIsYearPickerOpen: (open) => { isYearPickerOpen.value = open }
    })

    const datePickerCtx = inject(DATE_PICKER_CONTEXT, null)

    return () => {
      // Inside a DatePicker, render reka-ui's DatePickerCalendar so the calendar
      // is wired to the picker value. It IS a CalendarRoot, so all generic
      // Calendar.* parts (which consume the calendar root context) keep working.
      if (datePickerCtx) {
        return (
          <RekaDatePickerCalendar
            {...(attrs as Record<string, any>)}
            data-slot="calendar"
            class={cn(styles.value.base(), reactClass(props))}
            v-slots={{ default: slots.default }}
          />
        )
      }

      return (
        <RekaCalendarRoot
          {...(attrs as Record<string, any>)}
          data-slot="calendar"
          class={cn(styles.value.base(), reactClass(props))}
          v-slots={{ default: slots.default }}
        />
      )
    }
  }
})

export default CalendarRoot
