import { computed, defineComponent, provide, inject, ref, type PropType } from 'vue'
import {
  RangeCalendarRoot as RekaRangeCalendarRoot,
  DateRangePickerCalendar as RekaDateRangePickerCalendar
} from 'reka-ui'
import { rangeCalendarVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps } from '@/lib/react-compat'
import { provideYearPicker } from '@/calendar-year-picker/year-picker-context'
import { RANGE_CALENDAR_CONTEXT } from './range-calendar-context'
import { DATE_RANGE_PICKER_CONTEXT } from '@/date-range-picker/date-range-picker-context'

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
 *
 * When nested inside a `DateRangePicker.Popover` (detected via
 * `DATE_RANGE_PICKER_CONTEXT`), `RangeCalendar` renders reka-ui's
 * `DateRangePickerCalendar` instead of a bare `RangeCalendarRoot`. reka-ui
 * scopes its range calendar to the picker — `DateRangePickerCalendar` IS a
 * `RangeCalendarRoot` wired to the `DateRangePickerRoot` value — so every
 * generic `RangeCalendar.*` part keeps working, and `DateRangePicker.Popover`
 * composes with the standalone `RangeCalendar` exactly as HeroUI React does.
 */
export const RangeCalendarRoot = defineComponent({
  name: 'RangeCalendarRoot',
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
    const styles = computed(() => rangeCalendarVariants())
    provide(RANGE_CALENDAR_CONTEXT, { slots: styles })
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
      calendarGridSlot: 'range-calendar-grid',
      isYearPickerOpen,
      setIsYearPickerOpen: (open) => { isYearPickerOpen.value = open }
    })

    const dateRangePickerCtx = inject(DATE_RANGE_PICKER_CONTEXT, null)

    return () => {
      // Inside a DateRangePicker, render reka-ui's DateRangePickerCalendar so the
      // range calendar is wired to the picker value. It IS a RangeCalendarRoot,
      // so all generic RangeCalendar.* parts keep working.
      if (dateRangePickerCtx) {
        return (
          <RekaDateRangePickerCalendar
            {...(attrs as Record<string, any>)}
            data-slot="range-calendar"
            class={cn(styles.value.base(), reactClass(props))}
            v-slots={{ default: slots.default }}
          />
        )
      }

      return (
        <RekaRangeCalendarRoot
          {...(attrs as Record<string, any>)}
          data-slot="range-calendar"
          class={cn(styles.value.base(), reactClass(props))}
          v-slots={{ default: slots.default }}
        />
      )
    }
  }
})

export default RangeCalendarRoot
