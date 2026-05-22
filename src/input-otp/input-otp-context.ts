import type { ComputedRef, InjectionKey } from 'vue'
import type { inputOTPVariants } from '@heroui/styles'

/** The `inputOTPVariants()` slot map — one class-name function per InputOTP part. */
export type InputOTPSlots = ReturnType<typeof inputOTPVariants>

export interface InputOTPContext {
  /** Reactive slot map — recomputed when variant changes. */
  slots: ComputedRef<InputOTPSlots>
  /** Whether the whole input is disabled. */
  isDisabled: ComputedRef<boolean>
  /** Whether the input is in an invalid state. */
  isInvalid: ComputedRef<boolean>
}

/** Provided by `InputOTPRoot`, consumed by every compound part. */
export const INPUT_OTP_CONTEXT: InjectionKey<InputOTPContext> = Symbol('heroui-vue-input-otp')
