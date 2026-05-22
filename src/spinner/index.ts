/**
 * Spinner — faithful Vue port of HeroUI v3 `Spinner`.
 *
 * Compound API (HeroUI v3): `Spinner`, `Spinner.Root`.
 * Flat export `SpinnerRoot` available for named imports.
 */
import { SpinnerRoot } from './spinner'

/** Compound component — `Spinner.Root` (HeroUI v3 API). */
export const Spinner = Object.assign(SpinnerRoot, {
  Root: SpinnerRoot
})

export { SpinnerRoot }
export { spinnerVariants } from '@heroui/styles'
export type { SpinnerVariants } from '@heroui/styles'
