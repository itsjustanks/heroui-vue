/**
 * DateField — faithful Vue port of HeroUI v3 `DateField`.
 *
 * Compound API (HeroUI v3):
 *   `DateField` / `DateField.Root`
 *   `DateField.Group`          — date-input-group surface (DateInputGroupRoot)
 *   `DateField.Input`          — DateInput element (DateInputGroupInput)
 *   `DateField.InputContainer` — input layout wrapper (DateInputGroupInputContainer)
 *   `DateField.Segment`        — individual date segment (DateInputGroupSegment)
 *   `DateField.Prefix`         — leading adornment (DateInputGroupPrefix)
 *   `DateField.Suffix`         — trailing adornment (DateInputGroupSuffix)
 */
import { DateFieldRoot } from './date-field'
import { DateFieldGroup } from './date-field-group'
import { DateFieldInput } from './date-field-input'
import { DateFieldInputContainer } from './date-field-input-container'
import { DateFieldSegment } from './date-field-segment'
import { DateFieldPrefix } from './date-field-prefix'
import { DateFieldSuffix } from './date-field-suffix'

/** Compound component — mirrors HeroUI v3 `DateField.*` API exactly. */
export const DateField = Object.assign(DateFieldRoot, {
  Root: DateFieldRoot,
  Group: DateFieldGroup,
  Input: DateFieldInput,
  InputContainer: DateFieldInputContainer,
  Segment: DateFieldSegment,
  Prefix: DateFieldPrefix,
  Suffix: DateFieldSuffix,
})

export {
  DateFieldRoot,
  DateFieldGroup,
  DateFieldInput,
  DateFieldInputContainer,
  DateFieldSegment,
  DateFieldPrefix,
  DateFieldSuffix,
}

export { dateFieldVariants } from '@heroui/styles'
export type { DateFieldVariants } from '@heroui/styles'
