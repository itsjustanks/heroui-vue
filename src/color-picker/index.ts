/**
 * HeroUI-Vue ColorPicker — faithful HeroUI v3 color picker for Vue.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * NET-NEW (Phase 6 greenfield) — no `shadcn/` base, no call sites to migrate.
 * HeroUI's ColorPicker is built on React Aria; reka-ui (2.8) ships no color
 * primitive, so the saturation/hue/alpha color model lives in `setup()`. The
 * picker popover composes `heroui/popover`.
 *
 * Compound parts mirror HeroUI exactly — use dot notation or the named exports:
 *   ColorPicker (.Trigger, .Popover)
 *   ColorArea (.Thumb)
 *   ColorSlider (.Track, .Thumb, .Output)
 *   ColorField (.Group, .Input, .Prefix, .Suffix)
 *   ColorSwatch
 *   ColorSwatchPicker (.Item, .Swatch, .Indicator)
 */
import ColorPickerRoot, { ColorPickerTrigger, ColorPickerPopover } from './color-picker'
import ColorAreaRoot, { ColorAreaThumb } from './color-area'
import ColorSliderRoot, { ColorSliderTrack, ColorSliderThumb, ColorSliderOutput } from './color-slider'
import ColorFieldRoot, {
  ColorFieldGroup,
  ColorFieldInput,
  ColorFieldPrefix,
  ColorFieldSuffix
} from './color-field'
import ColorSwatchPickerRoot, {
  ColorSwatchPickerItem,
  ColorSwatchPickerSwatch,
  ColorSwatchPickerIndicator
} from './color-swatch-picker'

/** Compound `ColorPicker` — root with `.Trigger` / `.Popover` attached. */
export const ColorPicker = Object.assign(ColorPickerRoot, {
  Trigger: ColorPickerTrigger,
  Popover: ColorPickerPopover
})

/** Compound `ColorArea` — root with `.Thumb` attached. */
export const ColorArea = Object.assign(ColorAreaRoot, {
  Thumb: ColorAreaThumb
})

/** Compound `ColorSlider` — root with `.Track` / `.Thumb` / `.Output` attached. */
export const ColorSlider = Object.assign(ColorSliderRoot, {
  Track: ColorSliderTrack,
  Thumb: ColorSliderThumb,
  Output: ColorSliderOutput
})

/** Compound `ColorField` — root with `.Group` / `.Input` / `.Prefix` / `.Suffix` attached. */
export const ColorField = Object.assign(ColorFieldRoot, {
  Group: ColorFieldGroup,
  Input: ColorFieldInput,
  Prefix: ColorFieldPrefix,
  Suffix: ColorFieldSuffix
})

/** Compound `ColorSwatchPicker` — root with `.Item` / `.Swatch` / `.Indicator` attached. */
export const ColorSwatchPicker = Object.assign(ColorSwatchPickerRoot, {
  Item: ColorSwatchPickerItem,
  Swatch: ColorSwatchPickerSwatch,
  Indicator: ColorSwatchPickerIndicator
})

export { default as ColorSwatch, type TColorSwatchRenderProps } from './color-swatch'

export {
  ColorPickerTrigger,
  ColorPickerPopover,
  ColorAreaThumb,
  ColorSliderTrack,
  ColorSliderThumb,
  ColorSliderOutput,
  ColorFieldGroup,
  ColorFieldInput,
  ColorFieldPrefix,
  ColorFieldSuffix,
  ColorSwatchPickerItem,
  ColorSwatchPickerSwatch,
  ColorSwatchPickerIndicator
}

export { type TColorSliderChannel } from './color-slider'

// Color model — re-exported so callers can parse/format/own color values.
export {
  parseColor,
  formatColor,
  normalizeColor,
  type TColorValue,
  type TRgb,
  type THsv
} from './color-utils'

// Context — for advanced wrappers composing the ColorPicker.
export {
  useColorPickerContext,
  provideColorPickerContext,
  type TColorPickerContext
} from './color-picker-context'

export default ColorPicker
