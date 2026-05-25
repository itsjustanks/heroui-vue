/**
 * ColorInputGroup — re-export folder mirroring upstream
 * `@heroui/react/components/color-input-group`. Implementation lives in
 * `src/color-picker/color-field.tsx` (HeroUI uses the same primitives for
 * the inner group of a `ColorField`).
 *
 * @see https://www.heroui.com/docs/react/components/color-picker
 */
import {
  ColorFieldGroup   as ColorInputGroupRoot,
  ColorFieldInput   as ColorInputGroupInput,
  ColorFieldPrefix  as ColorInputGroupPrefix,
  ColorFieldSuffix  as ColorInputGroupSuffix,
} from '../color-picker'

/** Compound — `ColorInputGroup.Root`, `.Input`, `.Prefix`, `.Suffix` (HeroUI v3 API). */
export const ColorInputGroup = Object.assign(ColorInputGroupRoot, {
  Root: ColorInputGroupRoot,
  Input: ColorInputGroupInput,
  Prefix: ColorInputGroupPrefix,
  Suffix: ColorInputGroupSuffix,
})

export { ColorInputGroupRoot, ColorInputGroupInput, ColorInputGroupPrefix, ColorInputGroupSuffix }
export { colorInputGroupVariants } from '@heroui/styles'
export type { ColorInputGroupVariants } from '@heroui/styles'
