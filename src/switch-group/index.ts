/**
 * SwitchGroup — faithful Vue port of HeroUI v3 `SwitchGroup`.
 *
 * Compound API (HeroUI v3): `SwitchGroup`, `SwitchGroup.Root`.
 * Flat export: `SwitchGroupRoot`. Switches are placed directly inside the group.
 */
import { SwitchGroupRoot } from './switch-group'

/** Compound component — `SwitchGroup.Root` (HeroUI v3 API). */
export const SwitchGroup = Object.assign(SwitchGroupRoot, {
  Root: SwitchGroupRoot
})

export { SwitchGroupRoot }
export { SWITCH_GROUP_CONTEXT, type SwitchGroupContext } from './switch-group-context'
export { switchGroupVariants } from '@heroui/styles'
export type { SwitchGroupVariants } from '@heroui/styles'
