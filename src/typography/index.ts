/**
 * HeroUI-Vue Typography — faithful HeroUI v3 typography primitives.
 * Part of the HeroUI-for-Vue primitive library.
 *
 * Compound API mirrors HeroUI v3: `Typography` (= `TypographyRoot`) with
 * `.Root` / `.Heading` / `.Paragraph` / `.Code` / `.Prose` dot-notation parts.
 */
import { TypographyRoot } from './typography-root'
import { Heading } from './typography-heading'
import { Paragraph } from './typography-paragraph'
import { Code } from './typography-code'
import { Prose } from './typography-prose'

/** Compound component — `Typography` is `TypographyRoot` with presets attached. */
export const Typography = Object.assign(TypographyRoot, {
  Root: TypographyRoot,
  Heading,
  Paragraph,
  Code,
  Prose
})

export { TypographyRoot, Heading, Paragraph, Code, Prose }
export { typographyVariants } from './typography-variants'
export type {
  TTypographyVariants,
  TTypographyType
} from './typography-variants'

export default Typography
