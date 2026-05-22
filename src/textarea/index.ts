/**
 * TextArea — faithful Vue port of HeroUI v3 `TextArea`.
 *
 * Compound API (HeroUI v3): `TextArea`, `TextArea.Root`.
 * Flat export: `TextAreaRoot`.
 */
import { TextAreaRoot } from './textarea'

/** Compound component — `TextArea.Root` (HeroUI v3 API). */
export const TextArea = Object.assign(TextAreaRoot, {
  Root: TextAreaRoot,
})

export { TextAreaRoot }
export { textAreaVariants } from '@heroui/styles'
export type { TextAreaVariants } from '@heroui/styles'
