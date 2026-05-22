import { inject, provide, type InjectionKey, type Ref } from 'vue'

export interface YearPickerContextValue {
  calendarGridSlot: 'calendar-grid' | 'range-calendar-grid'
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
