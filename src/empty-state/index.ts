/**
 * EmptyState — faithful Vue port of HeroUI v3 `EmptyState`.
 */
import { EmptyStateRoot } from './empty-state'

export const EmptyState = Object.assign(EmptyStateRoot, {
  Root: EmptyStateRoot
})

export { EmptyStateRoot }
export { emptyStateVariants } from '@heroui/styles'
export type { EmptyStateVariants } from '@heroui/styles'
