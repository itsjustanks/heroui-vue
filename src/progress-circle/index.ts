/**
 * ProgressCircle — a faithful Vue port of HeroUI v3 `ProgressCircle`.
 *
 * Compound API (HeroUI v3): `ProgressCircle` (= `ProgressCircleRoot`) with
 * `.Root` / `.Track` / `.TrackCircle` / `.FillCircle` dot-notation parts.
 * The flat exports are available for named imports. Built over reka-ui
 * `ProgressRoot` for ARIA `progressbar` role semantics.
 *
 * @see https://www.heroui.com/docs/react/components/progress-circle
 */
import { ProgressCircleRoot } from './progress-circle'
import { ProgressCircleTrack } from './progress-circle-track'
import { ProgressCircleTrackCircle } from './progress-circle-track-circle'
import { ProgressCircleFillCircle } from './progress-circle-fill-circle'

/** Compound component — `ProgressCircle.Track`, `.TrackCircle`, `.FillCircle` (HeroUI v3 API). */
export const ProgressCircle = Object.assign(ProgressCircleRoot, {
  Root: ProgressCircleRoot,
  Track: ProgressCircleTrack,
  TrackCircle: ProgressCircleTrackCircle,
  FillCircle: ProgressCircleFillCircle
})

export { ProgressCircleRoot, ProgressCircleTrack, ProgressCircleTrackCircle, ProgressCircleFillCircle }
export { progressCircleVariants } from '@heroui/styles'
export type { ProgressCircleVariants } from '@heroui/styles'
