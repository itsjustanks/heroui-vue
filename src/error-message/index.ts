/**
 * ErrorMessage — low-level error message primitive. Faithful Vue port of
 * HeroUI v3 `ErrorMessage` — renders always (unlike `FieldError` which gates
 * on an `errors` array).
 *
 * Compound API (HeroUI v3): `ErrorMessage`, `ErrorMessage.Root`.
 *
 * @see https://www.heroui.com/docs/react/components/error-message
 */
import { ErrorMessageRoot } from './error-message'

/** Compound — `ErrorMessage.Root` (HeroUI v3 API). */
export const ErrorMessage = Object.assign(ErrorMessageRoot, {
  Root: ErrorMessageRoot,
})

export { ErrorMessageRoot }
export { errorMessageVariants } from '@heroui/styles'
export type { ErrorMessageVariants } from '@heroui/styles'
