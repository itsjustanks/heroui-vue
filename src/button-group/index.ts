/**
 * ButtonGroup — faithful Vue port of HeroUI v3 `ButtonGroup`.
 *
 * Compound API (HeroUI v3): `ButtonGroup`, `ButtonGroup.Root`, `ButtonGroup.Separator`.
 * Flat exports: `ButtonGroupRoot`, `ButtonGroupSeparator`.
 *
 * @see https://www.heroui.com/docs/react/components/button-group
 */
import { ButtonGroupRoot } from './button-group'
import { ButtonGroupSeparator } from './button-group-separator'

/** Compound component — `ButtonGroup.Root`, `ButtonGroup.Separator` (HeroUI v3 API). */
export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Root:      ButtonGroupRoot,
  Separator: ButtonGroupSeparator,
})

export { ButtonGroupRoot, ButtonGroupSeparator }
export { BUTTON_GROUP_CONTEXT, BUTTON_GROUP_CHILD } from './button-group-context'
import { BUTTON_GROUP_CONTEXT } from './button-group-context'
import type { ButtonGroupContext as _ButtonGroupContext } from './button-group-context'
/** React-style value alias for `BUTTON_GROUP_CONTEXT`; the type with the same name merges into this binding. */
export const ButtonGroupContext = BUTTON_GROUP_CONTEXT
export type ButtonGroupContext = _ButtonGroupContext
export { buttonGroupVariants } from '@heroui/styles'
export type { ButtonGroupVariants } from '@heroui/styles'
