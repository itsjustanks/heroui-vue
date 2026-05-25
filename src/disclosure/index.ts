/**
 * Disclosure — faithful Vue port of HeroUI v3 `Disclosure` (single collapsible).
 *
 * HeroUI v3 names this component `Disclosure`. heroui-vue also exposes it under
 * the `Collapsible` alias for discoverability, but `Disclosure` is the canonical
 * name and matches HeroUI's compound API exactly.
 *
 * Compound API (HeroUI v3):
 *   `Disclosure`            → DisclosureRoot
 *   `Disclosure.Heading`    → DisclosureHeading
 *   `Disclosure.Trigger`    → DisclosureTrigger
 *   `Disclosure.Content`    → DisclosureContent
 *   `Disclosure.Body`       → DisclosureBody
 *   `Disclosure.Indicator`  → DisclosureIndicator
 *
 * @see https://www.heroui.com/docs/react/components/disclosure
 */
import { CollapsibleRoot } from './collapsible'
import { CollapsibleHeading } from './collapsible-heading'
import { CollapsibleTrigger } from './collapsible-trigger'
import { CollapsibleContent } from './collapsible-content'
import { CollapsibleBody } from './collapsible-body'
import { CollapsibleIndicator } from './collapsible-indicator'

/** Compound component — `Disclosure.Heading`, `Disclosure.Trigger`, … (HeroUI v3 API). */
export const Disclosure = Object.assign(CollapsibleRoot, {
  Root: CollapsibleRoot,
  Heading: CollapsibleHeading,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
  Body: CollapsibleBody,
  Indicator: CollapsibleIndicator
})

/** `Collapsible` — discoverability alias for the canonical `Disclosure`. */
export const Collapsible = Disclosure

export {
  CollapsibleRoot,
  CollapsibleHeading,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleBody,
  CollapsibleIndicator
}

/* Canonical HeroUI v3 flat exports — same implementations, parity names. */
export {
  CollapsibleRoot       as DisclosureRoot,
  CollapsibleHeading    as DisclosureHeading,
  CollapsibleTrigger    as DisclosureTrigger,
  CollapsibleContent    as DisclosureContent,
  CollapsibleBody       as DisclosureBody,
  CollapsibleIndicator  as DisclosureIndicator
}

export { disclosureVariants } from '@heroui/styles'
export type { DisclosureVariants } from '@heroui/styles'
