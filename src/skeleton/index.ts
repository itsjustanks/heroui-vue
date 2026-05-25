/**
 * Skeleton — faithful Vue port of HeroUI v3 `Skeleton`.
 *
 * Compound API (HeroUI v3): `Skeleton`, `Skeleton.Root`.
 * Flat export `SkeletonRoot` available for named imports.
 *
 * @see https://www.heroui.com/docs/react/components/skeleton
 */
import { SkeletonRoot } from './skeleton'

/** Compound component — `Skeleton.Root` (HeroUI v3 API). */
export const Skeleton = Object.assign(SkeletonRoot, {
  Root: SkeletonRoot
})

export { SkeletonRoot }
export { skeletonVariants } from '@heroui/styles'
export type { SkeletonVariants } from '@heroui/styles'
