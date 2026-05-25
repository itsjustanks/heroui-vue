/**
 * Label — faithful Vue port of HeroUI v3 `Label`.
 *
 * Compound API (HeroUI v3): `Label`, `Label.Root`.
 * Flat export `LabelRoot` available for named imports.
 *
 * @see https://www.heroui.com/docs/react/components/label
 */
import { LabelRoot } from './label'

/** Compound component — `Label.Root` (HeroUI v3 API). */
export const Label = Object.assign(LabelRoot, {
  Root: LabelRoot
})

export { LabelRoot }
export { labelVariants } from '@heroui/styles'
export type { LabelVariants } from '@heroui/styles'
