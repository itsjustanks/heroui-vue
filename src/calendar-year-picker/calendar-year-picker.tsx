import {
  computed,
  defineComponent,
  Fragment,
  inject,
  provide,
  ref,
  type ComputedRef,
  type HTMLAttributes,
  type InjectionKey,
  type PropType
} from 'vue'
import {
  injectCalendarRootContext,
  injectRangeCalendarRootContext
} from 'reka-ui'
import { calendarYearPickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'
import { useYearPicker } from './year-picker-context'

type TCalendarYearPickerSlots = ReturnType<typeof calendarYearPickerVariants>

interface CalendarYearPickerTriggerRenderProps {
  isOpen: boolean
  monthYear: string
  toggle: () => void
}

interface CalendarYearPickerCellRenderProps {
  year: number
  formattedYear: string
  isSelected: boolean
  isCurrentYear: boolean
  isOpen: boolean
  selectYear: () => void
}

interface CalendarYearPickerTriggerContextValue extends CalendarYearPickerTriggerRenderProps {
  slots: TCalendarYearPickerSlots
}

interface CalendarYearPickerGridContextValue {
  activeYear: number
  focusedYear: number
  formatYear: (year: number) => string
  isYearPickerOpen: boolean
  selectYear: (year: number) => void
  setActiveYear: (year: number) => void
  slots: TCalendarYearPickerSlots
  years: number[]
}

const TRIGGER_CONTEXT: InjectionKey<ComputedRef<CalendarYearPickerTriggerContextValue>> = Symbol('heroui-vue-calendar-year-picker-trigger')
const GRID_CONTEXT: InjectionKey<ComputedRef<CalendarYearPickerGridContextValue>> = Symbol('heroui-vue-calendar-year-picker-grid')

const unknownProp = {
  type: [String, Number, Boolean, Object, Array, Function] as PropType<unknown>,
  default: undefined
}

function useTriggerContext () {
  const context = inject(TRIGGER_CONTEXT, null)
  if (!context) throw new Error('CalendarYearPicker trigger components must be used within <CalendarYearPicker.Trigger>.')
  return context.value
}

function useGridContext () {
  const context = inject(GRID_CONTEXT, null)
  if (!context) throw new Error('CalendarYearPicker components must be used within <CalendarYearPicker.Grid>.')
  return context
}

function useCalendarState () {
  try {
    const context = injectCalendarRootContext()
    return {
      placeholder: context.placeholder,
      minValue: context.minValue,
      maxValue: context.maxValue,
      setFocusedDate: context.onPlaceholderChange,
      timeZone: 'UTC'
    }
  } catch {
    const context = injectRangeCalendarRootContext()
    return {
      placeholder: context.placeholder,
      minValue: context.minValue,
      maxValue: context.maxValue,
      setFocusedDate: context.onPlaceholderChange,
      timeZone: 'UTC'
    }
  }
}

function yearRange (minYear?: number, maxYear?: number) {
  const start = minYear ?? 1900
  const end = maxYear ?? 2099
  return Array.from({ length: end - start + 1 }, (_value, index) => start + index)
}

function formatMonthYear (date: any, timeZone: string) {
  if (!date?.toDate) return ''
  return new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(date.toDate(timeZone))
}

function formatYear (date: any, year: number, timeZone: string) {
  const yearDate = date?.set ? date.set({ year }) : null
  if (!yearDate?.toDate) return String(year)
  return new Intl.DateTimeFormat(undefined, { year: 'numeric' }).format(yearDate.toDate(timeZone))
}

export const CalendarYearPickerTrigger = defineComponent({
  name: 'CalendarYearPickerTrigger',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps
  },
  setup (props, { attrs, slots }) {
    const picker = useYearPicker()
    const state = useCalendarState()
    const slotMap = computed(() => calendarYearPickerVariants())
    const triggerContext = computed(() => {
      const isOpen = picker.isYearPickerOpen.value
      const monthYear = formatMonthYear(state.placeholder.value, state.timeZone)

      return {
        isOpen,
        monthYear,
        slots: slotMap.value,
        toggle: () => picker.setIsYearPickerOpen(!isOpen)
      }
    })

    provide(TRIGGER_CONTEXT, triggerContext)

    return () => {
      const context = triggerContext.value
      const isDisabled = reactDisabled(props)
      const forwardedAttrs = reactPressAttrs(attrs)
      if (isDisabled) forwardedAttrs.disabled = true

      return (
        <button
          {...forwardedAttrs}
          aria-expanded={context.isOpen}
          aria-label={`${context.monthYear}, year selector`}
          data-disabled={isDisabled ? 'true' : undefined}
          data-open={context.isOpen ? 'true' : undefined}
          data-slot="calendar-year-picker-trigger"
          class={cn(slotMap.value.trigger(), reactClass(props))}
          onClick={(event) => {
            ;(forwardedAttrs.onClick as ((event: MouseEvent) => void) | undefined)?.(event)
            context.toggle()
          }}
        >
          {slots.default?.({ isOpen: context.isOpen, monthYear: context.monthYear, toggle: context.toggle })}
        </button>
      )
    }
  }
})

export const CalendarYearPickerTriggerHeading = defineComponent({
  name: 'CalendarYearPickerTriggerHeading',
  inheritAttrs: false,
  props: { ...reactClassProps },
  setup (props, { attrs, slots }) {
    return () => {
      const context = useTriggerContext()
      const values = { isOpen: context.isOpen, monthYear: context.monthYear, toggle: context.toggle }

      return (
        <span
          {...attrs}
          data-slot="calendar-year-picker-trigger-heading"
          class={cn(context.slots.triggerHeading(), reactClass(props))}
        >
          {slots.default?.(values) ?? context.monthYear}
        </span>
      )
    }
  }
})

export const CalendarYearPickerTriggerIndicator = defineComponent({
  name: 'CalendarYearPickerTriggerIndicator',
  inheritAttrs: false,
  props: { ...reactClassProps },
  setup (props, { attrs, slots }) {
    return () => {
      const context = useTriggerContext()
      const values = { isOpen: context.isOpen, monthYear: context.monthYear, toggle: context.toggle }

      return (
        <span
          aria-hidden="true"
          {...attrs}
          data-slot="calendar-year-picker-trigger-indicator"
          class={cn(context.slots.triggerIndicator(), reactClass(props))}
        >
          {slots.default?.(values) ?? <span aria-hidden="true">›</span>}
        </span>
      )
    }
  }
})

export const CalendarYearPickerGrid = defineComponent({
  name: 'CalendarYearPickerGrid',
  inheritAttrs: false,
  props: { ...reactClassProps },
  setup (props, { attrs, slots }) {
    const picker = useYearPicker()
    const state = useCalendarState()
    const activeYear = ref(state.placeholder.value.year)
    const slotMap = computed(() => calendarYearPickerVariants())

    const context = computed<CalendarYearPickerGridContextValue>(() => {
      const focusedDate = state.placeholder.value
      const focusedYear = focusedDate.year
      const years = yearRange(state.minValue.value?.year, state.maxValue.value?.year)
      const selectYear = (year: number) => {
        if (focusedDate?.set) state.setFocusedDate(focusedDate.set({ year }))
        picker.setIsYearPickerOpen(false)
      }

      return {
        activeYear: activeYear.value,
        focusedYear,
        formatYear: (year: number) => formatYear(focusedDate, year, state.timeZone),
        isYearPickerOpen: picker.isYearPickerOpen.value,
        selectYear,
        setActiveYear: (year: number) => { activeYear.value = year },
        slots: slotMap.value,
        years
      }
    })

    provide(GRID_CONTEXT, context)

    return () => (
      <div
        {...attrs}
        aria-hidden={!picker.isYearPickerOpen.value}
        aria-label="Year selector"
        data-open={picker.isYearPickerOpen.value ? 'true' : undefined}
        data-slot="calendar-year-picker-grid"
        role="listbox"
        tabindex={-1}
        class={cn(slotMap.value.yearGrid(), reactClass(props))}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export const CalendarYearPickerGridBody = defineComponent({
  name: 'CalendarYearPickerGridBody',
  setup (_props, { slots }) {
    return () => {
      const context = useGridContext().value
      const currentYear = new Date().getFullYear()

      return (
        <Fragment>
          {context.years.map((year) => {
            const values: CalendarYearPickerCellRenderProps = {
              formattedYear: context.formatYear(year),
              isCurrentYear: year === currentYear,
              isOpen: context.isYearPickerOpen,
              isSelected: year === context.focusedYear,
              selectYear: () => context.selectYear(year),
              year
            }

            return slots.default?.(values) ?? <CalendarYearPickerCell key={year} year={year} />
          })}
        </Fragment>
      )
    }
  }
})

export const CalendarYearPickerCell = defineComponent({
  name: 'CalendarYearPickerCell',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps,
    excludeFromTabOrder: unknownProp,
    year: { type: Number, required: true }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const context = useGridContext().value
      const formattedYear = context.formatYear(props.year)
      const isSelected = props.year === context.focusedYear
      const isActive = props.year === context.activeYear
      const values: CalendarYearPickerCellRenderProps = {
        formattedYear,
        isCurrentYear: props.year === new Date().getFullYear(),
        isOpen: context.isYearPickerOpen,
        isSelected,
        selectYear: () => context.selectYear(props.year),
        year: props.year
      }
      const isDisabled = reactDisabled(props)
      const forwardedAttrs = reactPressAttrs(attrs)
      if (isDisabled) forwardedAttrs.disabled = true

      return (
        <button
          {...forwardedAttrs}
          aria-label={formattedYear}
          aria-selected={isSelected}
          data-disabled={isDisabled ? 'true' : undefined}
          data-selected={isSelected ? 'true' : undefined}
          data-slot="calendar-year-picker-year-cell"
          data-year={props.year}
          tabindex={context.isYearPickerOpen && isActive ? 0 : -1}
          class={cn(context.slots.yearCell(), reactClass(props))}
          onClick={(event) => {
            ;(forwardedAttrs.onClick as ((event: MouseEvent) => void) | undefined)?.(event)
            context.selectYear(props.year)
          }}
          onFocus={(event) => {
            ;(forwardedAttrs.onFocus as ((event: FocusEvent) => void) | undefined)?.(event)
            context.setActiveYear(props.year)
          }}
        >
          {slots.default?.(values) ?? formattedYear}
        </button>
      )
    }
  }
})
