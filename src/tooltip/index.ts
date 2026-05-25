/**
 * Tooltip — faithful Vue port of HeroUI v3 `Tooltip`.
 *
 * Compound API (HeroUI v3):
 *   `Tooltip`, `Tooltip.Root`, `Tooltip.Trigger`, `Tooltip.Content`,
 *   `Tooltip.Arrow`
 *
 * Flat named exports (`TooltipRoot`, `TooltipTrigger`, …) are also available
 * for callers that prefer direct imports. `TooltipProvider` is a reka-ui
 * infrastructure helper (shared delay/skip timing) and has no HeroUI React
 * equivalent — exported flat only.
 *
 * @see https://www.heroui.com/docs/react/components/tooltip
 */
import { TooltipRoot } from './tooltip'
import { TooltipTrigger } from './tooltip-trigger'
import { TooltipContent } from './tooltip-content'
import { TooltipArrow } from './tooltip-arrow'
import { TooltipProvider } from './tooltip-provider'

/** Compound component — `Tooltip.Root`, `Tooltip.Trigger`, … (HeroUI v3 API). */
export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
})

export { TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow, TooltipProvider }
export { tooltipVariants } from '@heroui/styles'
export type { TooltipVariants } from '@heroui/styles'
