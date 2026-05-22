/**
 * ButtonGroup — faithful Vue port of HeroUI v3 `ButtonGroup`.
 *
 * Compound API (HeroUI v3): `ButtonGroup`, `ButtonGroup.Root`, `ButtonGroup.Separator`.
 * Flat exports: `ButtonGroupRoot`, `ButtonGroupSeparator`.
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
export type { ButtonGroupContext } from './button-group-context'
export { buttonGroupVariants } from '@heroui/styles'
export type { ButtonGroupVariants } from '@heroui/styles'
