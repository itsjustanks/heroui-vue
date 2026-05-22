/**
 * DateRangePicker — faithful Vue port of HeroUI v3 `DateRangePicker`.
 *
 * Compound API (HeroUI v3) — mirrors `Object.assign(DateRangePickerRoot, …)`:
 *   `DateRangePicker` / `DateRangePicker.Root`
 *   `DateRangePicker.Trigger`          — popover trigger button
 *   `DateRangePicker.TriggerIndicator` — calendar icon inside the trigger
 *   `DateRangePicker.RangeSeparator`   — divider between start/end segments
 *   `DateRangePicker.Popover`          — floating range-calendar panel
 *
 * The dual segmented input is composed with `DateField.Group` /
 * `DateField.Input slot="start|end"` / `DateField.Segment` (bridging to
 * reka-ui's `DateRangePickerField`). The calendar inside the popover uses
 * `DateRangePickerCalendar` — reka-ui scopes its range-calendar primitives per
 * picker, so the standalone `RangeCalendar` cannot wire to the picker value.
 */
import { DateRangePickerRoot } from './date-range-picker'
import { DateRangePickerTrigger } from './date-range-picker-trigger'
import { DateRangePickerTriggerIndicator } from './date-range-picker-trigger-indicator'
import { DateRangePickerRangeSeparator } from './date-range-picker-separator'
import { DateRangePickerPopover } from './date-range-picker-content'
import { DateRangePickerCalendar } from './date-range-picker-calendar'

/** Compound component — mirrors HeroUI v3 `DateRangePicker.*` API exactly. */
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
  /** reka-ui-wired range calendar for use inside `DateRangePicker.Popover`. */
  DateRangePickerCalendar,
}

export { dateRangePickerVariants } from '@heroui/styles'
export type { DateRangePickerVariants } from '@heroui/styles'
