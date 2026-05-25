/**
 * ProgressBar — a faithful Vue port of HeroUI v3 `ProgressBar`.
 *
 * Compound API (HeroUI v3): `ProgressBar` (= `ProgressBarRoot`) with
 * `.Root` / `.Output` / `.Track` / `.Fill` dot-notation parts. The flat
 * exports are available for named imports. Built over reka-ui `ProgressRoot`
 * for ARIA `progressbar` role semantics.
 *
 * @see https://www.heroui.com/docs/react/components/progress-bar
 */
import { ProgressBarRoot } from './progress-bar-root'
import { ProgressBarOutput } from './progress-bar-output'
import { ProgressBarTrack } from './progress-bar-track'
import { ProgressBarFill } from './progress-bar-fill'

/** Compound component — `ProgressBar.Output`, `.Track`, `.Fill` (HeroUI v3 API). */
export const ProgressBar = Object.assign(ProgressBarRoot, {
  Root: ProgressBarRoot,
  Output: ProgressBarOutput,
  Track: ProgressBarTrack,
  Fill: ProgressBarFill
})

export { ProgressBarRoot, ProgressBarOutput, ProgressBarTrack, ProgressBarFill }
export { progressBarVariants } from '@heroui/styles'
export type { ProgressBarVariants } from '@heroui/styles'
