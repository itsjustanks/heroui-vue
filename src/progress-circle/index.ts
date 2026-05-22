/**
 * HeroUI-Vue ProgressCircle — faithful HeroUI v3 `ProgressCircle` for Vue.
 *
 * NET-NEW primitive (no `shadcn-vue` base). A `ProgressCircle`
 * is the circular counterpart to the `Progress` bar — an SVG ring whose arc
 * fills with progress. HeroUI builds it on React Aria's `ProgressBar`; here
 * reka-ui's `ProgressRoot` provides the `progressbar` a11y and the ring is an
 * inline SVG, with the geometry math shared via context. Supports an
 * indeterminate (spinning) state when `value` is omitted. Part of the
 * HeroUI-for-Vue primitive library.
 *
 * Compound API mirrors HeroUI:
 *   ProgressCircle (.Track, .TrackCircle, .FillCircle)
 */
import { ProgressCircle as ProgressCircleRoot } from './progress-circle'
import { ProgressCircleTrack } from './progress-circle-track'
import { ProgressCircleTrackCircle } from './progress-circle-track-circle'
import { ProgressCircleFillCircle } from './progress-circle-fill-circle'

/** Compound `ProgressCircle` — attaches `.Track` / `.TrackCircle` / `.FillCircle`. */
type TProgressCircle = typeof ProgressCircleRoot & {
  Track: typeof ProgressCircleTrack
  TrackCircle: typeof ProgressCircleTrackCircle
  FillCircle: typeof ProgressCircleFillCircle
}

const ProgressCircle = ProgressCircleRoot as TProgressCircle
ProgressCircle.Track = ProgressCircleTrack
ProgressCircle.TrackCircle = ProgressCircleTrackCircle
ProgressCircle.FillCircle = ProgressCircleFillCircle

export {
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleTrackCircle,
  ProgressCircleFillCircle
}
export default ProgressCircle

export {
  useProgressCircleContext,
  type TProgressCircleContext
} from './progress-circle-context'
export {
  type TProgressCircleColor,
  type TProgressCircleSize
} from './constants'
export {
  progressCircleTrackVariants,
  progressCircleFillVariants,
  type TProgressCircleTrackVariants,
  type TProgressCircleFillVariants
} from './variants'
