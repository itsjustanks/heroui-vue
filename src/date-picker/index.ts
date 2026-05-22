/**
 * DatePicker — faithful Vue port of HeroUI v3 `DatePicker`.
 *
 * Compound API (HeroUI v3):
 *   `DatePicker` / `DatePicker.Root`
 *   `DatePicker.Trigger`          — popover trigger button
 *   `DatePicker.TriggerIndicator` — calendar icon inside the trigger
 *   `DatePicker.Popover`          — floating panel that contains the calendar
 *
 * The segmented date-field input and calendar are composed using `DateField`
 * and `Calendar` / `DatePickerCalendar` inside the popover.
 */
import { DatePickerRoot } from './date-picker'
import { DatePickerTrigger } from './date-picker-trigger'
import { DatePickerTriggerIndicator } from './date-picker-trigger-indicator'
import { DatePickerPopover, DatePickerContent } from './date-picker-content'
import { DatePickerCalendar } from './date-picker-calendar'
import { DatePickerField } from './date-picker-field'
import { DatePickerInput } from './date-picker-input'

/** Compound component — mirrors HeroUI v3 `DatePicker.*` API exactly. */
export const DatePicker = Object.assign(DatePickerRoot, {
  Root: DatePickerRoot,
  Trigger: DatePickerTrigger,
  TriggerIndicator: DatePickerTriggerIndicator,
  Popover: DatePickerPopover,
})

export {
  DatePickerRoot,
  DatePickerTrigger,
  DatePickerTriggerIndicator,
  DatePickerPopover,
  /** @deprecated Use `DatePickerPopover` */
  DatePickerContent,
  /** Convenience: full calendar grid wired to the date-picker context. */
  DatePickerCalendar,
  /** Legacy: segmented field surface (use `DateField.Group` inside `DatePicker` instead). */
  DatePickerField,
  /** Legacy: individual date segment (use `DateField.Segment` instead). */
  DatePickerInput,
}

export { datePickerVariants } from '@heroui/styles'
export type { DatePickerVariants } from '@heroui/styles'
