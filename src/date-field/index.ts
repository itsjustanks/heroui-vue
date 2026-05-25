/**
 * DateField — faithful Vue port of HeroUI v3 `DateField`.
 *
 * Compound API (HeroUI v3) — mirrors `Object.assign(DateFieldRoot, …)`:
 *   `DateField` / `DateField.Root`
 *   `DateField.Group`          — segmented-input surface (DateInputGroup.Root)
 *   `DateField.Input`          — segment iterator (DateInputGroup.Input)
 *   `DateField.InputContainer` — input layout wrapper (DateInputGroup.InputContainer)
 *   `DateField.Segment`        — individual date segment (DateInputGroup.Segment)
 *   `DateField.Prefix`         — leading adornment (DateInputGroup.Prefix)
 *   `DateField.Suffix`         — trailing adornment (DateInputGroup.Suffix)
 *
 * @see https://www.heroui.com/docs/react/components/date-field
 */
import {
  DateInputGroupInput,
  DateInputGroupInputContainer,
  DateInputGroupPrefix,
  DateInputGroupRoot,
  DateInputGroupSegment,
  DateInputGroupSuffix,
} from '@/date-input-group'

import { DateFieldRoot } from './date-field'

/** Compound component — mirrors HeroUI v3 `DateField.*` API exactly. */
export const DateField = Object.assign(DateFieldRoot, {
  Root: DateFieldRoot,
  Group: DateInputGroupRoot,
  Input: DateInputGroupInput,
  InputContainer: DateInputGroupInputContainer,
  Segment: DateInputGroupSegment,
  Prefix: DateInputGroupPrefix,
  Suffix: DateInputGroupSuffix,
})

export { DateFieldRoot }

export { dateFieldVariants } from '@heroui/styles'
export type { DateFieldVariants } from '@heroui/styles'
