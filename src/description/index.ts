/**
 * Description — a faithful Vue port of HeroUI v3 `Description`.
 * Compound API: `Description`, `Description.Root`.
 */
import { DescriptionRoot } from './description'

/** Compound component — `Description.Root` (HeroUI v3 API). */
export const Description = Object.assign(DescriptionRoot, {
  Root: DescriptionRoot
})

export { DescriptionRoot }
export { descriptionVariants } from '@heroui/styles'
export type { DescriptionVariants } from '@heroui/styles'
