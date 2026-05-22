/**
 * DateRangePicker — faithful Vue port of HeroUI v3 `DateRangePicker`.
 *
 * Compound API (HeroUI v3):
 *   DateRangePicker (.Root, .Trigger, .TriggerIndicator, .RangeSeparator, .Popover)
 *
 * Additional reka-ui-specific parts (no HeroUI React equivalent, kept for
 * composing the calendar panel inside `.Popover`):
 *   DateRangePickerField, DateRangePickerInput, DateRangePickerCalendar
 */
import { DateRangePickerRoot } from './date-range-picker'
import { DateRangePickerTrigger } from './date-range-picker-trigger'
import { DateRangePickerTriggerIndicator } from './date-range-picker-trigger-indicator'
import { DateRangePickerRangeSeparator } from './date-range-picker-separator'
import { DateRangePickerPopover } from './date-range-picker-content'
import { DateRangePickerField } from './date-range-picker-field'
import { DateRangePickerInput } from './date-range-picker-input'
import { DateRangePickerCalendar } from './date-range-picker-calendar'

/** Compound component — matches HeroUI v3 `DateRangePicker.*` API. */
export const DateRangePicker = Object.assign(DateRangePickerRoot, {
  Root: DateRangePickerRoot,
  Trigger: DateRangePickerTrigger,
  TriggerIndicator: DateRangePickerTriggerIndicator,
  RangeSeparator: DateRangePickerRangeSeparator,
  Popover: DateRangePickerPopover,
})

export {
  DateRangePickerRoot,
  DateRangePickerTrigger,
  DateRangePickerTriggerIndicator,
  DateRangePickerRangeSeparator,
  DateRangePickerPopover,
  /** reka-ui-specific parts for composing the calendar inside `.Popover` */
  DateRangePickerField,
  DateRangePickerInput,
  DateRangePickerCalendar,
}

export { dateRangePickerVariants } from '@heroui/styles'
export type { DateRangePickerVariants } from '@heroui/styles'
export type { TDateRangeSegments } from './date-range-picker-field'
