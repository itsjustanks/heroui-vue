/**
 * TextField — a faithful Vue port of HeroUI v3 `TextField`.
 *
 * Compound API (HeroUI v3): `TextField`, `TextField.Root`. Wrap an `InputGroup`
 * in a `TextField` so it inherits the field's layout context and variant.
 */
import { TextFieldRoot } from './textfield'

/** Compound component — `TextField.Root` (HeroUI v3 API). */
export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot
})

export { TextFieldRoot }
export { TEXT_FIELD_CONTEXT, type TextFieldContext } from './textfield-context'
export { textFieldVariants } from '@heroui/styles'
export type { TextFieldVariants } from '@heroui/styles'
