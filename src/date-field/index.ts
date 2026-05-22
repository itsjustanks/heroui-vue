/**
 * HeroUI-Vue DateField — faithful HeroUI v3 `DateField` over reka-ui.
 *
 * NET-NEW primitive (no `shadcn-vue` base). A `DateField` is a
 * segmented date input with **no popover and no calendar** — the date
 * counterpart to `TimeField`. Compound parts mirror HeroUI's `DateField.*` API
 * and `TimeField`'s segment parts. Built over reka-ui `DateFieldRoot` /
 * `DateFieldInput`. Date engine is `@internationalized/date`. Reuses
 * `time-field`'s shared `dateInputGroupVariants`. Part of the HeroUI-for-Vue
 * primitive library.
 *
 * Compound API:
 *   DateField (.Group, .Input, .Segment, .Prefix, .Suffix)
 */
import { DateField as DateFieldRoot } from './date-field'
import { DateFieldGroup } from './date-field-group'
import { DateFieldInput } from './date-field-input'
import { DateFieldSegment } from './date-field-segment'
import { DateFieldPrefix } from './date-field-prefix'
import { DateFieldSuffix } from './date-field-suffix'

/** Compound `DateField` — attaches `.Group` / `.Input` / `.Segment` / `.Prefix` / `.Suffix`. */
type TDateField = typeof DateFieldRoot & {
  Group: typeof DateFieldGroup
  Input: typeof DateFieldInput
  Segment: typeof DateFieldSegment
  Prefix: typeof DateFieldPrefix
  Suffix: typeof DateFieldSuffix
}

const DateField = DateFieldRoot as TDateField
DateField.Group = DateFieldGroup
DateField.Input = DateFieldInput
DateField.Segment = DateFieldSegment
DateField.Prefix = DateFieldPrefix
DateField.Suffix = DateFieldSuffix

export {
  DateField,
  DateFieldGroup,
  DateFieldInput,
  DateFieldSegment,
  DateFieldPrefix,
  DateFieldSuffix
}
export default DateField

export type { TDateSegment } from './date-field-input'
