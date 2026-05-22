/**
 * Card — a faithful Vue port of HeroUI v3 `Card`.
 *
 * Compound API (HeroUI v3): `Card`, `Card.Header`, `Card.Title`,
 * `Card.Description`, `Card.Content`, `Card.Footer`. The flat part exports
 * (`CardHeader`, …) are available too, for callers that prefer named imports.
 */
import { CardRoot } from './card'
import { CardHeader } from './card-header'
import { CardTitle } from './card-title'
import { CardDescription } from './card-description'
import { CardContent } from './card-content'
import { CardFooter } from './card-footer'

/** Compound component — `Card.Header`, `Card.Title`, … (HeroUI v3 API). */
export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter
})

export { CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export { cardVariants } from '@heroui/styles'
export type { CardVariants } from '@heroui/styles'
