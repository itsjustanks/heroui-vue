/**
 * Breadcrumbs — faithful Vue port of HeroUI v3 `Breadcrumbs`.
 *
 * Compound API (HeroUI v3): `Breadcrumbs`, `Breadcrumbs.Root`, `Breadcrumbs.Item`.
 * Flat exports: `BreadcrumbsRoot`, `BreadcrumbsItem`.
 *
 * @see https://www.heroui.com/docs/react/components/breadcrumbs
 */
import { BreadcrumbsRoot } from './breadcrumb'
import { BreadcrumbsItem } from './breadcrumb-item'

/** Compound component — `Breadcrumbs.Root`, `Breadcrumbs.Item` (HeroUI v3 API). */
export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Root: BreadcrumbsRoot,
  Item: BreadcrumbsItem,
})

export { BreadcrumbsRoot, BreadcrumbsItem }
export { breadcrumbsVariants } from '@heroui/styles'
export type { BreadcrumbsVariants } from '@heroui/styles'
