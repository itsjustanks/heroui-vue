/**
 * HeroUI-Vue Meter — faithful HeroUI v3 `Meter` for Vue.
 *
 * NET-NEW primitive (Phase 6 greenfield, no `shadcn/` base). A `Meter` is a
 * **labelled quantity indicator within a known range** — disk usage, a score, a
 * capacity gauge — distinct from `Progress`, which shows task completion. HeroUI
 * builds it on React Aria's `Meter`; reka-ui has **no `Meter` primitive**, so
 * the value math lives in the root `setup()` and is shared with the compound
 * parts via context. Part of the HeroUI-for-Vue primitive library
 * (`.planning/prps/heroui-vue-library.md`).
 *
 * Compound API mirrors HeroUI:
 *   Meter (.Label, .Output, .Track, .Fill)
 */
import { Meter as MeterRoot } from './meter'
import { MeterLabel } from './meter-label'
import { MeterOutput } from './meter-output'
import { MeterTrack } from './meter-track'
import { MeterFill } from './meter-fill'

/** Compound `Meter` — attaches `.Label` / `.Output` / `.Track` / `.Fill`. */
type TMeter = typeof MeterRoot & {
  Label: typeof MeterLabel
  Output: typeof MeterOutput
  Track: typeof MeterTrack
  Fill: typeof MeterFill
}

const Meter = MeterRoot as TMeter
Meter.Label = MeterLabel
Meter.Output = MeterOutput
Meter.Track = MeterTrack
Meter.Fill = MeterFill

export { Meter, MeterLabel, MeterOutput, MeterTrack, MeterFill }
export default Meter

export { useMeterContext, type TMeterContext } from './meter-context'
export {
  meterTrackVariants,
  meterFillVariants,
  type TMeterColor,
  type TMeterSize,
  type TMeterTrackVariants,
  type TMeterFillVariants
} from './variants'
