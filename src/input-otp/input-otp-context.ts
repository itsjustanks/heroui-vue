import { inject, provide, type InjectionKey, type Ref } from 'vue'
import type { TInputOTPVariant } from './input-otp-variants'

/** Context shared from `InputOTPRoot` to its `InputOTPSlot` descendants. */
interface IInputOTPContext {
  /** Visual variant — consumed by each slot. */
  variant: Ref<TInputOTPVariant>
  /** Whether the whole input is disabled. */
  isDisabled: Ref<boolean>
  /** Whether the input is in an invalid state. */
  isInvalid: Ref<boolean>
}

const INPUT_OTP_INJECTION_KEY: InjectionKey<IInputOTPContext> =
  Symbol('HeroUIInputOTPContext')

/** Provide input-otp context from `InputOTPRoot`. */
export function provideInputOTPContext (context: IInputOTPContext): void {
  provide(INPUT_OTP_INJECTION_KEY, context)
}

/** Inject input-otp context within an `InputOTPSlot`. */
export function useInputOTPContext (): IInputOTPContext | undefined {
  return inject(INPUT_OTP_INJECTION_KEY, undefined)
}
