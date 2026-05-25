/**
 * Meter — faithful Vue port of HeroUI v3 `Meter`.
 *
 * Compound API (HeroUI v3): `Meter`, `Meter.Root`, `Meter.Output`, `Meter.Track`, `Meter.Fill`.
 * Flat exports: `MeterRoot`, `MeterOutput`, `MeterTrack`, `MeterFill`.
 *
 * @see https://www.heroui.com/docs/react/components/meter
 */
import { MeterRoot } from './meter'
import { MeterOutput } from './meter-output'
import { MeterTrack } from './meter-track'
import { MeterFill } from './meter-fill'

/** Compound component — `Meter.Root`, `Meter.Output`, `Meter.Track`, `Meter.Fill` (HeroUI v3 API). */
export const Meter = Object.assign(MeterRoot, {
  Root:   MeterRoot,
  Output: MeterOutput,
  Track:  MeterTrack,
  Fill:   MeterFill,
})

export { MeterRoot, MeterOutput, MeterTrack, MeterFill }
export { meterVariants } from '@heroui/styles'
export type { MeterVariants } from '@heroui/styles'
