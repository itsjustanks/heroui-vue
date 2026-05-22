/**
 * Button — faithful Vue port of HeroUI v3 `Button`.
 *
 * Compound API (HeroUI v3): `Button`, `Button.Root`.
 * Flat export: `ButtonRoot`.
 */
import { ButtonRoot } from './button'

/** Compound component — `Button.Root` (HeroUI v3 API). */
export const Button = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
})

export { ButtonRoot }
export { buttonVariants } from '@heroui/styles'
export type { ButtonVariants } from '@heroui/styles'
