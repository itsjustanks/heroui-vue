/**
 * Popover — faithful Vue port of HeroUI v3 `Popover`.
 *
 * Compound API (HeroUI v3):
 *   `Popover`, `Popover.Root`, `Popover.Trigger`, `Popover.Dialog`,
 *   `Popover.Arrow`, `Popover.Content`, `Popover.Heading`
 *
 * Flat named exports (`PopoverRoot`, `PopoverTrigger`, …) are also available
 * for callers that prefer direct imports.
 */
import { PopoverRoot } from './popover'
import { PopoverTrigger } from './popover-trigger'
import { PopoverDialog } from './popover-dialog'
import { PopoverArrow } from './popover-arrow'
import { PopoverContent } from './popover-content'
import { PopoverHeading } from './popover-heading'

/** Compound component — `Popover.Root`, `Popover.Trigger`, … (HeroUI v3 API). */
export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Dialog: PopoverDialog,
  Arrow: PopoverArrow,
  Content: PopoverContent,
  Heading: PopoverHeading,
})

export { PopoverRoot, PopoverTrigger, PopoverDialog, PopoverArrow, PopoverContent, PopoverHeading }
export { popoverVariants } from '@heroui/styles'
export type { PopoverVariants } from '@heroui/styles'
