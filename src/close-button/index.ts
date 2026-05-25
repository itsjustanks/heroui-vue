/**
 * CloseButton — a faithful Vue port of HeroUI v3 `CloseButton`.
 *
 * Compound API (HeroUI v3): `CloseButton` (= `CloseButtonRoot`) with a
 * `.Root` dot-notation alias. The flat export (`CloseButtonRoot`) is available
 * for named imports.
 *
 * @see https://www.heroui.com/docs/react/components/close-button
 */
import { CloseButtonRoot } from './close-button-root'

/** Compound component — `CloseButton.Root` (HeroUI v3 API). */
export const CloseButton = Object.assign(CloseButtonRoot, {
  Root: CloseButtonRoot
})

export { CloseButtonRoot }
export { closeButtonVariants } from '@heroui/styles'
export type { CloseButtonVariants } from '@heroui/styles'
