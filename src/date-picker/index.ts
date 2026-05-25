/**
 * DatePicker — faithful Vue port of HeroUI v3 `DatePicker`.
 *
 * Compound API (HeroUI v3) — mirrors `Object.assign(DatePickerRoot, …)`:
 *   `DatePicker` / `DatePicker.Root`
 *   `DatePicker.Trigger`          — popover trigger button
 *   `DatePicker.TriggerIndicator` — calendar icon inside the trigger
 *   `DatePicker.Popover`          — floating panel that holds the calendar
 *
 * The segmented input is composed with `DateField.Group` / `DateField.Input` /
 * `DateField.Segment` (which bridge to reka-ui's `DatePickerField`). The
 * calendar inside the popover uses `DatePickerCalendar` — reka-ui scopes its
 * calendar primitives per picker, so the standalone `Calendar` cannot wire to
 * the picker value; `DatePickerCalendar` renders the identical `Calendar` DOM.
 *
 * @see https://www.heroui.com/docs/react/components/date-picker
 */
import { DatePickerRoot } from './date-picker'
import { DatePickerTrigger } from './date-picker-trigger'
import { DatePickerTriggerIndicator } from './date-picker-trigger-indicator'
import { DatePickerPopover, DatePickerContent } from './date-picker-content'
import { DatePickerCalendar } from './date-picker-calendar'

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
  /** reka-ui-wired calendar for use inside `DatePicker.Popover`. */
  DatePickerCalendar,
}

export { datePickerVariants } from '@heroui/styles'
export type { DatePickerVariants } from '@heroui/styles'
