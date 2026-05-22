/**
 * InputOTP — faithful Vue port of HeroUI v3 `InputOTP`.
 *
 * Compound API (HeroUI v3): `InputOTP`, `InputOTP.Root`, `InputOTP.Group`,
 * `InputOTP.Slot`, `InputOTP.Separator`.
 * Flat exports mirror HeroUI v3 React named exports exactly.
 */
import { InputOTPRoot } from './input-otp-root'
import { InputOTPGroup } from './input-otp-group'
import { InputOTPSlot } from './input-otp-slot'
import { InputOTPSeparator } from './input-otp-separator'

/** Compound component — `InputOTP.Root`, `.Group`, `.Slot`, `.Separator` (HeroUI v3 API). */
export const InputOTP = Object.assign(InputOTPRoot, {
  Root:      InputOTPRoot,
  Group:     InputOTPGroup,
  Slot:      InputOTPSlot,
  Separator: InputOTPSeparator,
})

export { InputOTPRoot, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
export { inputOTPVariants } from '@heroui/styles'
export type { InputOTPVariants } from '@heroui/styles'

// Convenience regex constants (mirrors HeroUI v3 React export)
export const REGEXP_ONLY_DIGITS = '^\\d+$'
export const REGEXP_ONLY_CHARS = '^[a-zA-Z]+$'
export const REGEXP_ONLY_DIGITS_AND_CHARS = '^[a-zA-Z0-9]+$'
