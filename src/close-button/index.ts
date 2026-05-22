/**
 * HeroUI-Vue Close Button — faithful HeroUI v3 close-button primitive.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * The standard ✕ dismiss icon button. Compound API mirrors HeroUI v3:
 * `CloseButton` (= `CloseButtonRoot`) with a `.Root` dot-notation alias.
 */
import { CloseButtonRoot } from './close-button-root'

/** Compound component — `CloseButton` is `CloseButtonRoot` with a `.Root` alias. */
export const CloseButton = Object.assign(CloseButtonRoot, {
  Root: CloseButtonRoot
})

export { CloseButtonRoot }

export default CloseButton
