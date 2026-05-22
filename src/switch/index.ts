/**
 * Switch — faithful Vue port of HeroUI v3 `Switch`.
 *
 * Compound API (HeroUI v3): `Switch`, `Switch.Root`, `Switch.Control`,
 * `Switch.Thumb`, `Switch.Icon`, `Switch.Content`. Flat named exports available too.
 */
import { SwitchRoot, SwitchControl, SwitchThumb, SwitchIcon, SwitchContent } from './switch'

/** Compound component — `Switch.Control`, `Switch.Thumb`, … (HeroUI v3 API). */
export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Icon: SwitchIcon,
  Content: SwitchContent
})

export { SwitchRoot, SwitchControl, SwitchThumb, SwitchIcon, SwitchContent }
export { switchVariants } from '@heroui/styles'
export type { SwitchVariants } from '@heroui/styles'
