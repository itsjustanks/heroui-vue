/**
 * DisclosureGroup — faithful Vue port of HeroUI v3 `DisclosureGroup`.
 *
 * Compound API (HeroUI v3): `DisclosureGroup`, `DisclosureGroup.Root`.
 * Backed by reka-ui's `AccordionRoot` for keyboard navigation and ARIA.
 *
 * @see https://www.heroui.com/docs/react/components/disclosure-group
 */
import { DisclosureGroupRoot } from './disclosure-group'

/** Compound component — `DisclosureGroup.Root` (HeroUI v3 API). */
export const DisclosureGroup = Object.assign(DisclosureGroupRoot, {
  Root: DisclosureGroupRoot,
})

export { DisclosureGroupRoot }
export {
  useDisclosureGroupNavigation
} from './use-disclosure-group-navigation'
export type {
  UseDisclosureGroupNavigationProps,
  UseDisclosureGroupNavigationReturn
} from './use-disclosure-group-navigation'
export { disclosureGroupVariants } from '@heroui/styles'
export type { DisclosureGroupVariants } from '@heroui/styles'
