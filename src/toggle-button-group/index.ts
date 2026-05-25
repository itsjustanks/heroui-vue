/**
 * ToggleButtonGroup — faithful Vue port of HeroUI v3 `ToggleButtonGroup`.
 *
 * Compound API (HeroUI v3): `ToggleButtonGroup`, `ToggleButtonGroup.Root`,
 * `ToggleButtonGroup.Separator`.
 * Flat exports: `ToggleButtonGroupRoot`, `ToggleButtonGroupSeparator`.
 *
 * Group members are `ToggleButton` (exported from `src/toggle/`) — it adapts to
 * group selection automatically when nested inside a `ToggleButtonGroup`.
 *
 * @see https://www.heroui.com/docs/react/components/toggle-button-group
 */
import { ToggleButtonGroupRoot } from './toggle-group'
import { ToggleButtonGroupSeparator } from './toggle-group-separator'

/** Compound component — `ToggleButtonGroup.Root`, `ToggleButtonGroup.Separator` (HeroUI v3 API). */
export const ToggleButtonGroup = Object.assign(ToggleButtonGroupRoot, {
  Root:      ToggleButtonGroupRoot,
  Separator: ToggleButtonGroupSeparator,
})

export { ToggleButtonGroupRoot, ToggleButtonGroupSeparator }
export { TOGGLE_BUTTON_GROUP_CONTEXT, TOGGLE_BUTTON_GROUP_CHILD } from './toggle-group-context'
import { TOGGLE_BUTTON_GROUP_CONTEXT } from './toggle-group-context'
import type { ToggleButtonGroupContext as _ToggleButtonGroupContext } from './toggle-group-context'
/** React-style value alias for `TOGGLE_BUTTON_GROUP_CONTEXT`. */
export const ToggleButtonGroupContext = TOGGLE_BUTTON_GROUP_CONTEXT
export type ToggleButtonGroupContext = _ToggleButtonGroupContext
export { toggleButtonGroupVariants } from '@heroui/styles'
export type { ToggleButtonGroupVariants } from '@heroui/styles'
