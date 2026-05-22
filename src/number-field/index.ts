/**
 * HeroUI-Vue NumberField — faithful HeroUI v3 `NumberField` over reka-ui.
 *
 * NET-NEW primitive (Phase 6 greenfield, no `shadcn/` base). Compound parts
 * mirror HeroUI's `NumberField.*` API. Built over reka-ui `NumberFieldRoot` /
 * `NumberFieldInput` / `NumberFieldIncrement` / `NumberFieldDecrement` — the
 * reka-ui analogue of React Aria's `NumberField` HeroUI wraps. Part of the
 * HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Compound API mirrors HeroUI exactly:
 *   NumberField (.Group, .Input, .IncrementButton, .DecrementButton)
 */
import { NumberField as NumberFieldRoot } from './number-field'
import { NumberFieldGroup } from './number-field-group'
import { NumberFieldInput } from './number-field-input'
import {
  NumberFieldDecrementButton,
  NumberFieldIncrementButton
} from './number-field-button'

/** Compound `NumberField` — attaches `.Group` / `.Input` / `.IncrementButton` / `.DecrementButton`. */
type TNumberField = typeof NumberFieldRoot & {
  Group: typeof NumberFieldGroup
  Input: typeof NumberFieldInput
  IncrementButton: typeof NumberFieldIncrementButton
  DecrementButton: typeof NumberFieldDecrementButton
}

const NumberField = NumberFieldRoot as TNumberField
NumberField.Group = NumberFieldGroup
NumberField.Input = NumberFieldInput
NumberField.IncrementButton = NumberFieldIncrementButton
NumberField.DecrementButton = NumberFieldDecrementButton

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrementButton,
  NumberFieldDecrementButton
}
export default NumberField

export { numberFieldGroupVariants } from './variants'
export type { TNumberFieldGroupVariants } from './variants'
