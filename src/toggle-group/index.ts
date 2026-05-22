/**
 * ToggleButtonGroup — faithful Vue port of HeroUI v3 `ToggleButtonGroup`.
 *
 * Compound API (HeroUI v3): `ToggleButtonGroup`, `ToggleButtonGroup.Root`,
 * `ToggleButtonGroup.Separator`.
 * Flat exports: `ToggleButtonGroupRoot`, `ToggleButtonGroupSeparator`.
 *
 * Group members are `ToggleButton` (exported from `src/toggle/`) — it adapts to
 * group selection automatically when nested inside a `ToggleButtonGroup`.
 */
import { ToggleButtonGroupRoot } from './toggle-group'
import { ToggleButtonGroupSeparator } from './toggle-group-separator'

/** Compound component — `ToggleButtonGroup.Root`, `ToggleButtonGroup.Separator` (HeroUI v3 API). */
export const ToggleButtonGroup = Object.assign(ToggleButtonGroupRoot, {
  Root:      ToggleButtonGroupRoot,
  Separator: ToggleButtonGroupSeparator,
})

export { ToggleButtonGroupRoot, ToggleButtonGroupSeparator }
export { TOGGLE_BUTTON_GROUP_CONTEXT } from './toggle-group-context'
export type { ToggleButtonGroupContext } from './toggle-group-context'
export { toggleButtonGroupVariants } from '@heroui/styles'
export type { ToggleButtonGroupVariants } from '@heroui/styles'
