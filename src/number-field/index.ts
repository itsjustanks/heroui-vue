/**
 * NumberField — faithful Vue port of HeroUI v3 `NumberField`.
 *
 * Compound API (HeroUI v3): `NumberField`, `NumberField.Root`, `NumberField.Group`,
 * `NumberField.Input`, `NumberField.IncrementButton`, `NumberField.DecrementButton`.
 * Flat exports mirror HeroUI v3 React named exports exactly.
 */
import { NumberFieldRoot } from './number-field'
import { NumberFieldGroup } from './number-field-group'
import { NumberFieldInput } from './number-field-input'
import { NumberFieldIncrementButton, NumberFieldDecrementButton } from './number-field-button'

/** Compound component — `NumberField.Root`, `.Group`, `.Input`, `.IncrementButton`, `.DecrementButton` (HeroUI v3 API). */
export const NumberField = Object.assign(NumberFieldRoot, {
  Root:             NumberFieldRoot,
  Group:            NumberFieldGroup,
  Input:            NumberFieldInput,
  IncrementButton:  NumberFieldIncrementButton,
  DecrementButton:  NumberFieldDecrementButton,
})

export {
  NumberFieldRoot,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrementButton,
  NumberFieldDecrementButton,
}
export { numberFieldVariants } from '@heroui/styles'
export type { NumberFieldVariants } from '@heroui/styles'
