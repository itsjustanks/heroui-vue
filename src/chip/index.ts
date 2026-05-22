/**
 * HeroUI-Vue Chip — faithful HeroUI v3 chip primitive.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * A compact, pill-shaped tag — distinct from `badge`. Compound API mirrors
 * HeroUI v3: `Chip` (= `ChipRoot`) with `.Root` / `.Label` dot-notation parts.
 */
import { ChipRoot } from './chip-root'
import { ChipLabel } from './chip-label'

/** Compound component — `Chip` is `ChipRoot` with dot-notation parts attached. */
export const Chip = Object.assign(ChipRoot, {
  Root: ChipRoot,
  Label: ChipLabel
})

export { ChipRoot, ChipLabel }
export { chipVariants } from './chip-variants'
export type { TChipVariants } from './chip-variants'

export default Chip
