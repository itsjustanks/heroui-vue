/**
 * Accordion — faithful Vue port of HeroUI v3 `Accordion`.
 *
 * Compound API (HeroUI v3):
 *   `Accordion`            → AccordionRoot (DisclosureGroup)
 *   `Accordion.Item`       → AccordionItem (Disclosure)
 *   `Accordion.Heading`    → AccordionHeading
 *   `Accordion.Trigger`    → AccordionTrigger
 *   `Accordion.Panel`      → AccordionPanel (DisclosurePanel)
 *   `Accordion.Body`       → AccordionBody
 *   `Accordion.Indicator`  → AccordionIndicator
 *
 * @see https://www.heroui.com/docs/react/components/accordion
 */
import { AccordionRoot } from './accordion'
import { AccordionItem } from './accordion-item'
import { AccordionHeading } from './accordion-heading'
import { AccordionTrigger } from './accordion-trigger'
import { AccordionPanel, AccordionContent } from './accordion-content'
import { AccordionBody } from './accordion-body'
import { AccordionIndicator } from './accordion-indicator'

/** Compound component — `Accordion.Item`, `Accordion.Trigger`, … (HeroUI v3 API). */
export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Heading: AccordionHeading,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
  Body: AccordionBody,
  Indicator: AccordionIndicator
})

export {
  AccordionRoot,
  AccordionItem,
  AccordionHeading,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
  AccordionBody,
  AccordionIndicator
}

export { accordionVariants } from '@heroui/styles'
export type { AccordionVariants } from '@heroui/styles'
