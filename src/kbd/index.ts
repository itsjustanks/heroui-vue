/**
 * Kbd — faithful Vue port of HeroUI v3 `Kbd`.
 *
 * Compound API (HeroUI v3): `Kbd`, `Kbd.Root`, `Kbd.Abbr`, `Kbd.Content`.
 * Flat part exports (`KbdRoot`, `KbdAbbr`, `KbdContent`) are available for
 * callers that prefer named imports.
 */
import { KbdRoot } from './kbd'
import { KbdAbbr } from './kbd-abbr'
import { KbdContent } from './kbd-content'

/** Compound component — `Kbd.Root`, `Kbd.Abbr`, `Kbd.Content` (HeroUI v3 API). */
export const Kbd = Object.assign(KbdRoot, {
  Root: KbdRoot,
  Abbr: KbdAbbr,
  Content: KbdContent
})

export { KbdRoot, KbdAbbr, KbdContent }
export { kbdVariants } from '@heroui/styles'
export type { KbdVariants } from '@heroui/styles'

export type { KbdKey } from './kbd.constants'
export { kbdKeysMap, kbdKeysLabelMap } from './kbd.constants'
