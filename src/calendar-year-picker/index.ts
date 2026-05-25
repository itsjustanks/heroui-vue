/**
 * @see https://www.heroui.com/docs/react/components/calendar
 */
import {
  CalendarYearPickerCell,
  CalendarYearPickerGrid,
  CalendarYearPickerGridBody,
  CalendarYearPickerTrigger,
  CalendarYearPickerTriggerHeading,
  CalendarYearPickerTriggerIndicator
} from './calendar-year-picker'

export const CalendarYearPicker = {
  Trigger: CalendarYearPickerTrigger,
  TriggerHeading: CalendarYearPickerTriggerHeading,
  TriggerIndicator: CalendarYearPickerTriggerIndicator,
  Grid: CalendarYearPickerGrid,
  GridBody: CalendarYearPickerGridBody,
  Cell: CalendarYearPickerCell
}

export {
  CalendarYearPickerCell,
  CalendarYearPickerGrid,
  CalendarYearPickerGridBody,
  CalendarYearPickerTrigger,
  CalendarYearPickerTriggerHeading,
  CalendarYearPickerTriggerIndicator
}

export {
  YEAR_PICKER_CONTEXT as YearPickerContext,
  YEAR_PICKER_CONTEXT as YearPickerStateContext,
  useYearPicker,
  useYearPickerState
} from './year-picker-context'
export type {
  YearPickerContextValue,
  YearPickerStateContextValue
} from './year-picker-context'
export { calendarYearPickerVariants } from '@heroui/styles'
export type { CalendarYearPickerVariants } from '@heroui/styles'
