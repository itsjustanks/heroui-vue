/**
 * Chip — a faithful Vue port of HeroUI v3 `Chip`.
 *
 * Compound API (HeroUI v3): `Chip`, `Chip.Root`, `Chip.Label`.
 * Flat named exports (`ChipRoot`, `ChipLabel`) are also available for callers
 * that prefer named imports.
 *
 * @see https://www.heroui.com/docs/react/components/chip
 */
import { ChipRoot } from './chip-root'
import { ChipLabel } from './chip-label'

/** Compound component — `Chip.Root`, `Chip.Label` (HeroUI v3 API). */
export const Chip = Object.assign(ChipRoot, {
  Root: ChipRoot,
  Label: ChipLabel
})

export { ChipRoot, ChipLabel }
export { chipVariants } from '@heroui/styles'
export type { ChipVariants } from '@heroui/styles'
