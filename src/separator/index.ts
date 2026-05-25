/**
 * Separator — faithful Vue port of HeroUI v3 `Separator`.
 *
 * Compound API (HeroUI v3): `Separator`, `Separator.Root`.
 * Flat export `SeparatorRoot` available for named imports.
 *
 * @see https://www.heroui.com/docs/react/components/separator
 */
import { SeparatorRoot } from './separator'

/** Compound component — `Separator.Root` (HeroUI v3 API). */
export const Separator = Object.assign(SeparatorRoot, {
  Root: SeparatorRoot
})

export { SeparatorRoot }
export { separatorVariants } from '@heroui/styles'
export type { SeparatorVariants } from '@heroui/styles'
