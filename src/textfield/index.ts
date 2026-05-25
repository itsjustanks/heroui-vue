/**
 * TextField — a faithful Vue port of HeroUI v3 `TextField`.
 *
 * Compound API (HeroUI v3): `TextField`, `TextField.Root`. Wrap an `InputGroup`
 * in a `TextField` so it inherits the field's layout context and variant.
 *
 * @see https://www.heroui.com/docs/react/components/text-field
 */
import { TextFieldRoot } from './textfield'

/** Compound component — `TextField.Root` (HeroUI v3 API). */
export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot
})

export { TextFieldRoot }
export { TEXT_FIELD_CONTEXT } from './textfield-context'
import { TEXT_FIELD_CONTEXT } from './textfield-context'
import type { TextFieldContext as _TextFieldContext } from './textfield-context'
/** React-style value alias for `TEXT_FIELD_CONTEXT`; type with the same name merges into this binding. */
export const TextFieldContext = TEXT_FIELD_CONTEXT
export type TextFieldContext = _TextFieldContext
export { textFieldVariants } from '@heroui/styles'
export type { TextFieldVariants } from '@heroui/styles'
