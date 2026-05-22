/**
 * TimeField — faithful Vue port of HeroUI v3 `TimeField`.
 *
 * Compound API (HeroUI v3):
 *   `TimeField` / `TimeField.Root`
 *   `TimeField.Group`          — date-input-group surface (DateInputGroupRoot)
 *   `TimeField.Input`          — TimeInput element (DateInputGroupInput)
 *   `TimeField.InputContainer` — input layout wrapper (DateInputGroupInputContainer)
 *   `TimeField.Segment`        — individual time segment (DateInputGroupSegment)
 *   `TimeField.Prefix`         — leading adornment (DateInputGroupPrefix)
 *   `TimeField.Suffix`         — trailing adornment (DateInputGroupSuffix)
 */
import { TimeFieldRoot } from './time-field'
import { TimeFieldGroup } from './time-field-group'
import { TimeFieldInput } from './time-field-input'
import { TimeFieldInputContainer } from './time-field-input-container'
import { TimeFieldSegment } from './time-field-segment'
import { TimeFieldPrefix } from './time-field-prefix'
import { TimeFieldSuffix } from './time-field-suffix'

/** Compound component — mirrors HeroUI v3 `TimeField.*` API exactly. */
export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
  Group: TimeFieldGroup,
  Input: TimeFieldInput,
  InputContainer: TimeFieldInputContainer,
  Segment: TimeFieldSegment,
  Prefix: TimeFieldPrefix,
  Suffix: TimeFieldSuffix,
})

export {
  TimeFieldRoot,
  TimeFieldGroup,
  TimeFieldInput,
  TimeFieldInputContainer,
  TimeFieldSegment,
  TimeFieldPrefix,
  TimeFieldSuffix,
}

export { timeFieldVariants } from '@heroui/styles'
export type { TimeFieldVariants } from '@heroui/styles'
