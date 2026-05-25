/**
 * Button — faithful Vue port of HeroUI v3 `Button`.
 *
 * Compound API (HeroUI v3): `Button`, `Button.Root`.
 * Flat export: `ButtonRoot`.
 *
 * @see https://www.heroui.com/docs/react/components/button
 */
import { ButtonRoot } from './button'

/** Compound component — `Button.Root` (HeroUI v3 API). */
export const Button = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
})

export { ButtonRoot }
/** Re-export so Button consumers can mark themselves as group children, mirroring `@heroui/react`. */
export { BUTTON_GROUP_CHILD } from '../button-group/button-group-context'
export { buttonVariants } from '@heroui/styles'
export type { ButtonVariants } from '@heroui/styles'
