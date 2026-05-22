/**
 * ColorPicker — faithful Vue port of HeroUI v3 `ColorPicker` family.
 *
 * Compound APIs (all match HeroUI v3):
 *
 *   ColorPicker (.Root, .Trigger, .Popover)
 *   ColorArea (.Root, .Thumb)
 *   ColorSlider (.Root, .Output, .Track, .Thumb)
 *   ColorField (.Root, .Group, .Input, .Prefix, .Suffix)
 *   ColorSwatch (.Root)
 *   ColorSwatchPicker (.Root, .Item, .Swatch, .Indicator)
 */
import ColorPickerRoot, { ColorPickerTrigger, ColorPickerPopover } from './color-picker'
import ColorAreaRoot, { ColorAreaThumb } from './color-area'
import ColorSliderRoot, { ColorSliderTrack, ColorSliderThumb, ColorSliderOutput } from './color-slider'
import ColorFieldRoot, { ColorFieldGroup, ColorFieldInput, ColorFieldPrefix, ColorFieldSuffix } from './color-field'
import ColorSwatchRoot from './color-swatch'
import ColorSwatchPickerRoot, {
  ColorSwatchPickerItem,
  ColorSwatchPickerSwatch,
  ColorSwatchPickerIndicator
} from './color-swatch-picker'

/** Compound `ColorPicker` — root with `.Root`, `.Trigger`, `.Popover`. */
export const ColorPicker = Object.assign(ColorPickerRoot, {
  Root: ColorPickerRoot,
  Trigger: ColorPickerTrigger,
  Popover: ColorPickerPopover,
})

/** Compound `ColorArea` — root with `.Root`, `.Thumb`. */
export const ColorArea = Object.assign(ColorAreaRoot, {
  Root: ColorAreaRoot,
  Thumb: ColorAreaThumb,
})

/** Compound `ColorSlider` — root with `.Root`, `.Output`, `.Track`, `.Thumb`. */
export const ColorSlider = Object.assign(ColorSliderRoot, {
  Root: ColorSliderRoot,
  Output: ColorSliderOutput,
  Track: ColorSliderTrack,
  Thumb: ColorSliderThumb,
})

/** Compound `ColorField` — root with `.Root`, `.Group`, `.Input`, `.Prefix`, `.Suffix`. */
export const ColorField = Object.assign(ColorFieldRoot, {
  Root: ColorFieldRoot,
  Group: ColorFieldGroup,
  Input: ColorFieldInput,
  Prefix: ColorFieldPrefix,
  Suffix: ColorFieldSuffix,
})

/** Compound `ColorSwatch` — root with `.Root`. */
export const ColorSwatch = Object.assign(ColorSwatchRoot, {
  Root: ColorSwatchRoot,
})

/** Compound `ColorSwatchPicker` — root with `.Root`, `.Item`, `.Swatch`, `.Indicator`. */
export const ColorSwatchPicker = Object.assign(ColorSwatchPickerRoot, {
  Root: ColorSwatchPickerRoot,
  Item: ColorSwatchPickerItem,
  Swatch: ColorSwatchPickerSwatch,
  Indicator: ColorSwatchPickerIndicator,
})

/* Named exports — flat parts */
export {
  ColorPickerRoot,
  ColorPickerTrigger,
  ColorPickerPopover,
  ColorAreaRoot,
  ColorAreaThumb,
  ColorSliderRoot,
  ColorSliderTrack,
  ColorSliderThumb,
  ColorSliderOutput,
  ColorFieldRoot,
  ColorFieldGroup,
  ColorFieldInput,
  ColorFieldPrefix,
  ColorFieldSuffix,
  ColorSwatchRoot,
  ColorSwatchPickerRoot,
  ColorSwatchPickerItem,
  ColorSwatchPickerSwatch,
  ColorSwatchPickerIndicator,
}

/* Variants */
export { colorPickerVariants } from '@heroui/styles'
export type { ColorPickerVariants } from '@heroui/styles'
export { colorAreaVariants } from '@heroui/styles'
export type { ColorAreaVariants } from '@heroui/styles'
export { colorSliderVariants } from '@heroui/styles'
export type { ColorSliderVariants } from '@heroui/styles'
export { colorFieldVariants } from '@heroui/styles'
export type { ColorFieldVariants } from '@heroui/styles'
export { colorInputGroupVariants } from '@heroui/styles'
export type { ColorInputGroupVariants } from '@heroui/styles'
export { colorSwatchVariants } from '@heroui/styles'
export type { ColorSwatchVariants } from '@heroui/styles'
export { colorSwatchPickerVariants } from '@heroui/styles'
export type { ColorSwatchPickerVariants } from '@heroui/styles'

/* Color model — re-exported so callers can parse/format/own color values. */
export {
  parseColor,
  formatColor,
  normalizeColor,
  type TColorValue,
  type TRgb,
  type THsv,
} from './color-utils'

/* Context — for advanced wrappers composing the ColorPicker. */
export {
  useColorPickerContext,
  provideColorPickerContext,
  type TColorPickerContext,
  type ColorPickerSlots,
} from './color-picker-context'

/* Channel type */
export { type TColorSwatchRenderProps } from './color-swatch'
export { type TColorSliderChannel } from './color-slider'

export default ColorPicker
