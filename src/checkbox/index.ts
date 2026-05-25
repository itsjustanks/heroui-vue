/**
 * Checkbox — faithful Vue port of HeroUI v3 `Checkbox`.
 *
 * Compound API (HeroUI v3): `Checkbox`, `Checkbox.Root`, `Checkbox.Control`,
 * `Checkbox.Indicator`, `Checkbox.Content`. Flat named exports available too.
 *
 * @see https://www.heroui.com/docs/react/components/checkbox
 */
import { CheckboxRoot, CheckboxControl, CheckboxIndicator, CheckboxContent } from './checkbox'

/** Compound component — `Checkbox.Control`, `Checkbox.Indicator`, … (HeroUI v3 API). */
export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Content: CheckboxContent
})

export { CheckboxRoot, CheckboxControl, CheckboxIndicator, CheckboxContent }
export { checkboxVariants } from '@heroui/styles'
export type { CheckboxVariants } from '@heroui/styles'
