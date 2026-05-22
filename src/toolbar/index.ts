/**
 * Toolbar — faithful Vue port of HeroUI v3 `Toolbar`.
 *
 * Compound API (HeroUI v3): `Toolbar`, `Toolbar.Root`.
 * Flat export: `ToolbarRoot`.
 *
 * HeroUI v3 ships only `ToolbarRoot` as a named compound part. The
 * `Button`, `Link`, and `Separator` helpers are reka-ui composition
 * extensions and remain available as flat named exports.
 */
import { ToolbarRoot } from './toolbar-root'
import { ToolbarButton } from './toolbar-button'
import { ToolbarLink } from './toolbar-link'
import { ToolbarSeparator } from './toolbar-separator'

/** Compound component — `Toolbar.Root` (HeroUI v3 API). */
export const Toolbar = Object.assign(ToolbarRoot, {
  Root: ToolbarRoot,
})

export { ToolbarRoot, ToolbarButton, ToolbarLink, ToolbarSeparator }
export { toolbarVariants } from '@heroui/styles'
export type { ToolbarVariants } from '@heroui/styles'
