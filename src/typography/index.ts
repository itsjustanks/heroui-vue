/**
 * Typography — a faithful Vue port of HeroUI v3 `Typography`.
 *
 * Compound API (HeroUI v3): `Typography` (= `TypographyRoot`) with
 * `.Root` / `.Heading` / `.Paragraph` / `.Code` / `.Prose` dot-notation parts.
 * The flat exports (`TypographyRoot`, `Heading`, …) are available for named imports.
 *
 * @see https://www.heroui.com/docs/react/components/typography
 */
import { TypographyRoot } from './typography-root'
import { Heading } from './typography-heading'
import { Paragraph } from './typography-paragraph'
import { Code } from './typography-code'
import { Prose } from './typography-prose'

/** Compound component — `Typography.Heading`, `Typography.Paragraph`, … (HeroUI v3 API). */
export const Typography = Object.assign(TypographyRoot, {
  Root: TypographyRoot,
  Heading,
  Paragraph,
  Code,
  Prose
})

export { TypographyRoot, Heading, Paragraph, Code, Prose }
export { typographyVariants } from '@heroui/styles'
export type { TypographyVariants } from '@heroui/styles'
