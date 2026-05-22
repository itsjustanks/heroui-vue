/**
 * HeroUI-Vue DateRangePicker — faithful HeroUI v3 `DateRangePicker` over reka-ui.
 *
 * Net-new primitive (Phase 6, no `shadcn/` base). Composes a dual-segment date
 * field + a popover + a range calendar via reka-ui's context-wired
 * `DateRangePicker*` parts, styled to HeroUI v3 taste (matching `heroui/calendar`
 * and `heroui/popover`). Date engine is `@internationalized/date`; the value is
 * a `{ start, end }` `DateRange`. Part of the HeroUI-for-Vue primitive library
 * (`.planning/prps/heroui-vue-library.md`).
 *
 * Compound API:
 *   DateRangePicker          — root (reka `DateRangePickerRoot`)
 *   DateRangePickerField     — dual-segment surface (HeroUI `DateField.Group`)
 *   DateRangePickerInput     — one segment, `type="start" | "end"`
 *   DateRangePickerSeparator — start/end divider   (HeroUI `RangeSeparator`)
 *   DateRangePickerTrigger   — popover trigger      (HeroUI `Trigger`)
 *   DateRangePickerContent   — popover panel        (HeroUI `Popover`)
 *   DateRangePickerCalendar  — range month grid     (HeroUI `RangeCalendar`)
 */
export { default as DateRangePicker } from './date-range-picker'
export { default as DateRangePickerField } from './date-range-picker-field'
export { default as DateRangePickerInput } from './date-range-picker-input'
export { default as DateRangePickerSeparator } from './date-range-picker-separator'
export { default as DateRangePickerTrigger } from './date-range-picker-trigger'
export { default as DateRangePickerContent } from './date-range-picker-content'
export { default as DateRangePickerCalendar } from './date-range-picker-calendar'
export type { TDateRangeSegments } from './date-range-picker-field'
