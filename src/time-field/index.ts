/**
 * TimeField — faithful Vue port of HeroUI v3 `TimeField`.
 *
 * Compound API (HeroUI v3) — mirrors `Object.assign(TimeFieldRoot, …)`:
 *   `TimeField` / `TimeField.Root`
 *   `TimeField.Group`          — segmented-input surface (DateInputGroup.Root)
 *   `TimeField.Input`          — segment iterator (DateInputGroup.Input)
 *   `TimeField.InputContainer` — input layout wrapper (DateInputGroup.InputContainer)
 *   `TimeField.Segment`        — individual time segment (DateInputGroup.Segment)
 *   `TimeField.Prefix`         — leading adornment (DateInputGroup.Prefix)
 *   `TimeField.Suffix`         — trailing adornment (DateInputGroup.Suffix)
 *
 * @see https://www.heroui.com/docs/react/components/time-field
 */
import {
  DateInputGroupInput,
  DateInputGroupInputContainer,
  DateInputGroupPrefix,
  DateInputGroupRoot,
  DateInputGroupSegment,
  DateInputGroupSuffix,
} from '@/date-input-group'

import { TimeFieldRoot } from './time-field'

/** Compound component — mirrors HeroUI v3 `TimeField.*` API exactly. */
export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
  Group: DateInputGroupRoot,
  Input: DateInputGroupInput,
  InputContainer: DateInputGroupInputContainer,
  Segment: DateInputGroupSegment,
  Prefix: DateInputGroupPrefix,
  Suffix: DateInputGroupSuffix,
})

export { TimeFieldRoot }

export { timeFieldVariants } from '@heroui/styles'
export type { TimeFieldVariants } from '@heroui/styles'
