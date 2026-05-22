/**
 * HeroUI-Vue Input OTP — faithful HeroUI v3 one-time-code input.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Segmented one-time-passcode input built over reka-ui `PinInputRoot` /
 * `PinInputInput`. Compound API mirrors HeroUI v3 — `InputOTP`
 * (= `InputOTPRoot`) with `.Root` / `.Group` / `.Slot` / `.Separator`
 * dot-notation parts. Code value binds via `v-model` on `InputOTPRoot`.
 */
import { InputOTPRoot } from './input-otp-root'
import { InputOTPGroup } from './input-otp-group'
import { InputOTPSlot } from './input-otp-slot'
import { InputOTPSeparator } from './input-otp-separator'

/** Compound component — `InputOTP` is `InputOTPRoot` with parts attached. */
export const InputOTP = Object.assign(InputOTPRoot, {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSeparator
})

export { InputOTPRoot, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
export { inputOTPSlotVariants } from './input-otp-variants'
export type {
  TInputOTPSlotVariants,
  TInputOTPVariant
} from './input-otp-variants'

export default InputOTP
