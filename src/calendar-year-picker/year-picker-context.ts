import { inject, provide, type InjectionKey, type Ref } from 'vue'

export interface YearPickerContextValue {
  calendarGridSlot: 'calendar-grid' | 'range-calendar-grid'
  isYearPickerOpen: Ref<boolean>
  setIsYearPickerOpen: (open: boolean) => void
}

/** State-side context — mirrors React Aria's split between `YearPickerContext` (config)
 * and `YearPickerStateContext` (open/close state). In the Vue port both live on a
 * single inject key, so `YearPickerStateContext` aliases `YEAR_PICKER_CONTEXT`. */
export interface YearPickerStateContextValue {
  isYearPickerOpen: Ref<boolean>
  setIsYearPickerOpen: (open: boolean) => void
}

export const YEAR_PICKER_CONTEXT: InjectionKey<YearPickerContextValue> = Symbol('heroui-vue-year-picker')

export function provideYearPicker (value: YearPickerContextValue) {
  provide(YEAR_PICKER_CONTEXT, value)
}

export function useYearPicker () {
  const context = inject(YEAR_PICKER_CONTEXT, null)
  if (!context) throw new Error('useYearPicker must be used within a <Calendar> or <RangeCalendar> component.')
  return context
}

/** Mirrors React Aria's `useYearPickerState` — returns only the open/close state slice. */
export function useYearPickerState (): YearPickerStateContextValue {
  const { isYearPickerOpen, setIsYearPickerOpen } = useYearPicker()
  return { isYearPickerOpen, setIsYearPickerOpen }
}
