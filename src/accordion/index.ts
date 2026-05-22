/**
 * Accordion — faithful Vue port of HeroUI v3 `DisclosureGroup` + `Disclosure`.
 *
 * Compound API (HeroUI v3):
 *   `Accordion`            → DisclosureGroup root
 *   `Accordion.Item`       → Disclosure root (per item)
 *   `Accordion.Heading`    → DisclosureHeading
 *   `Accordion.Trigger`    → DisclosureTrigger (includes Heading + Indicator)
 *   `Accordion.Content`    → DisclosureContent (includes Body + BodyInner)
 *   `Accordion.Body`       → DisclosureBody
 *   `Accordion.Indicator`  → DisclosureIndicator
 */
import { AccordionRoot } from './accordion'
import { AccordionItem } from './accordion-item'
import { AccordionHeading } from './accordion-heading'
import { AccordionTrigger } from './accordion-trigger'
import { AccordionContent } from './accordion-content'
import { AccordionBody } from './accordion-body'
import { AccordionIndicator } from './accordion-indicator'

/** Compound component — `Accordion.Item`, `Accordion.Trigger`, … (HeroUI v3 API). */
export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Heading: AccordionHeading,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Body: AccordionBody,
  Indicator: AccordionIndicator
})

export {
  AccordionRoot,
  AccordionItem,
  AccordionHeading,
  AccordionTrigger,
  AccordionContent,
  AccordionBody,
  AccordionIndicator
}

export { disclosureGroupVariants } from '@heroui/styles'
export type { DisclosureGroupVariants } from '@heroui/styles'
export { disclosureVariants } from '@heroui/styles'
export type { DisclosureVariants } from '@heroui/styles'
