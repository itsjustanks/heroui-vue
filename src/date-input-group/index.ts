/**
 * DateInputGroup — faithful Vue port of HeroUI v3 `DateInputGroup`.
 *
 * The shared segmented-input surface reused by `DateField` and `TimeField`
 * (as `.Group`, `.Input`, `.InputContainer`, `.Segment`, `.Prefix`, `.Suffix`)
 * and bridged into `DatePicker` / `DateRangePicker`.
 *
 * Compound API (HeroUI v3):
 *   `DateInputGroup` / `DateInputGroup.Root`
 *   `DateInputGroup.Input`
 *   `DateInputGroup.InputContainer`
 *   `DateInputGroup.Segment`
 *   `DateInputGroup.Prefix`
 *   `DateInputGroup.Suffix`
 */
import { DateInputGroupRoot } from './date-input-group'
import { DateInputGroupInput } from './date-input-group-input'
import { DateInputGroupInputContainer } from './date-input-group-input-container'
import { DateInputGroupSegment } from './date-input-group-segment'
import { DateInputGroupPrefix } from './date-input-group-prefix'
import { DateInputGroupSuffix } from './date-input-group-suffix'

/** Compound component — mirrors HeroUI v3 `DateInputGroup.*` API exactly. */
export const DateInputGroup = Object.assign(DateInputGroupRoot, {
  Root: DateInputGroupRoot,
  Input: DateInputGroupInput,
  InputContainer: DateInputGroupInputContainer,
  Segment: DateInputGroupSegment,
  Prefix: DateInputGroupPrefix,
  Suffix: DateInputGroupSuffix,
})

export {
  DateInputGroupRoot,
  DateInputGroupInput,
  DateInputGroupInputContainer,
  DateInputGroupSegment,
  DateInputGroupPrefix,
  DateInputGroupSuffix,
}

export {
  DATE_FIELD_KIND,
  DATE_INPUT_GROUP_CONTEXT,
  DATE_SEGMENTS,
} from './date-input-group-context'
export type {
  DateFieldKind,
  DateInputGroupContext,
  DateRangeSegments,
  DateSegment,
  DateSegmentsContext,
} from './date-input-group-context'

export { dateInputGroupVariants } from '@heroui/styles'
export type { DateInputGroupVariants } from '@heroui/styles'
