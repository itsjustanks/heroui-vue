/**
 * FieldError — re-export folder mirroring upstream
 * `@heroui/react/components/field-error`. Implementation lives in
 * `src/field/field-error.tsx`.
 *
 * Compound API (HeroUI v3): `FieldError`, `FieldError.Root`.
 *
 * @see https://www.heroui.com/docs/react/components/field-error
 */
import { FieldError as FieldErrorRoot } from '../field/field-error'

/** Compound — `FieldError.Root` (HeroUI v3 API). */
export const FieldError = Object.assign(FieldErrorRoot, {
  Root: FieldErrorRoot,
})

export { FieldErrorRoot }
export { fieldErrorVariants } from '@heroui/styles'
export type { FieldErrorVariants } from '@heroui/styles'
