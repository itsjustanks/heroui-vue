/**
 * Badge — a faithful Vue port of HeroUI v3 `Badge`.
 *
 * Compound API (HeroUI v3): `Badge`, `Badge.Anchor`, `Badge.Label`, `Badge.Root`.
 * Flat named exports (`BadgeRoot`, `BadgeLabel`, `BadgeAnchor`) are also
 * available for callers that prefer named imports.
 */
import { BadgeRoot } from './badge'
import { BadgeLabel } from './badge-label'
import { BadgeAnchor } from './badge-anchor'

/** Compound component — `Badge.Anchor`, `Badge.Label` (HeroUI v3 API). */
export const Badge = Object.assign(BadgeRoot, {
  Anchor: BadgeAnchor,
  Label: BadgeLabel,
  Root: BadgeRoot
})

export { BadgeRoot, BadgeLabel, BadgeAnchor }
export { badgeVariants } from '@heroui/styles'
export type { BadgeVariants } from '@heroui/styles'
