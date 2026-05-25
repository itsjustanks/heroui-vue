/**
 * Toolbar — faithful Vue port of HeroUI v3 `Toolbar`.
 *
 * Compound API (HeroUI v3): `Toolbar`, `Toolbar.Root`.
 * Flat export: `ToolbarRoot`.
 *
 * HeroUI v3 ships only `ToolbarRoot` as a named compound part — there is no
 * `ToolbarButton`, `ToolbarLink`, or `ToolbarSeparator`. Toolbar content is
 * composed from plain `Button` / `Separator` placed directly inside `Toolbar`.
 *
 * @see https://www.heroui.com/docs/react/components/toolbar
 */
import { ToolbarRoot } from './toolbar-root'

/** Compound component — `Toolbar.Root` (HeroUI v3 API). */
export const Toolbar = Object.assign(ToolbarRoot, {
  Root: ToolbarRoot,
})

export { ToolbarRoot }
export { toolbarVariants } from '@heroui/styles'
export type { ToolbarVariants } from '@heroui/styles'
