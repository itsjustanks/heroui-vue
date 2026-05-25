/**
 * Toggle — faithful Vue port of HeroUI v3 `ToggleButton`.
 *
 * Compound API (HeroUI v3): `ToggleButton`, `ToggleButton.Root`.
 * Flat export: `ToggleButtonRoot`.
 *
 * @see https://www.heroui.com/docs/react/components/toggle-button
 */
import { ToggleButtonRoot } from './toggle'

/** Compound component — `ToggleButton.Root` (HeroUI v3 API). */
export const ToggleButton = Object.assign(ToggleButtonRoot, {
  Root: ToggleButtonRoot,
})

export { ToggleButtonRoot }
export { toggleButtonVariants } from '@heroui/styles'
export type { ToggleButtonVariants } from '@heroui/styles'
