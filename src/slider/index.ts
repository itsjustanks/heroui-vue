/**
 * Slider — faithful Vue port of HeroUI v3 `Slider`.
 *
 * Compound API (HeroUI v3): `Slider`, `Slider.Root`, `Slider.Output`,
 * `Slider.Track`, `Slider.Fill`, `Slider.Thumb`, `Slider.Marks`.
 * Flat exports mirror HeroUI v3 React named exports exactly.
 */
import { SliderRoot } from './slider'
import { SliderOutput } from './slider-output'
import { SliderTrack } from './slider-track'
import { SliderFill } from './slider-fill'
import { SliderThumb } from './slider-thumb'
import { SliderMarks } from './slider-marks'

/** Compound component — `Slider.Root`, `.Output`, `.Track`, `.Fill`, `.Thumb`, `.Marks` (HeroUI v3 API). */
export const Slider = Object.assign(SliderRoot, {
  Root:   SliderRoot,
  Output: SliderOutput,
  Track:  SliderTrack,
  Fill:   SliderFill,
  Thumb:  SliderThumb,
  Marks:  SliderMarks,
})

export { SliderRoot, SliderOutput, SliderTrack, SliderFill, SliderThumb, SliderMarks }
export { sliderVariants } from '@heroui/styles'
export type { SliderVariants } from '@heroui/styles'
