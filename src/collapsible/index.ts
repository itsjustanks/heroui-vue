/**
 * Collapsible — faithful Vue port of HeroUI v3 `Disclosure` (single collapsible).
 *
 * Compound API (HeroUI v3):
 *   `Collapsible`            → DisclosureRoot
 *   `Collapsible.Heading`    → DisclosureHeading
 *   `Collapsible.Trigger`    → DisclosureTrigger
 *   `Collapsible.Content`    → DisclosureContent
 *   `Collapsible.Body`       → DisclosureBody
 *   `Collapsible.Indicator`  → DisclosureIndicator
 */
import { CollapsibleRoot } from './collapsible'
import { CollapsibleHeading } from './collapsible-heading'
import { CollapsibleTrigger } from './collapsible-trigger'
import { CollapsibleContent } from './collapsible-content'
import { CollapsibleBody } from './collapsible-body'
import { CollapsibleIndicator } from './collapsible-indicator'

/** Compound component — `Collapsible.Heading`, `Collapsible.Trigger`, … (HeroUI v3 API). */
export const Collapsible = Object.assign(CollapsibleRoot, {
  Root: CollapsibleRoot,
  Heading: CollapsibleHeading,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
  Body: CollapsibleBody,
  Indicator: CollapsibleIndicator
})

export {
  CollapsibleRoot,
  CollapsibleHeading,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleBody,
  CollapsibleIndicator
}

export { disclosureVariants } from '@heroui/styles'
export type { DisclosureVariants } from '@heroui/styles'
