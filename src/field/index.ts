/**
 * HeroUI-Vue Field — faithful HeroUI v3 form-field primitives over plain DOM.
 * Part of the HeroUI-for-Vue primitive library.
 *
 * Export names (components, the `fieldVariants` cva, and the `FieldVariants`
 * type) mirror `shadcn-vue` exactly so call-site migration is a pure
 * import-path swap.
 *
 * @see https://www.heroui.com/docs/react/components/field
 */
export { fieldVariants } from './variants'
export type { FieldVariants } from './variants'

export { default as Field } from './field'
export { default as FieldContent } from './field-content'
export { default as FieldDescription } from './field-description'
export { default as FieldError } from './field-error'
export { default as FieldGroup } from './field-group'
export { default as FieldLabel } from './field-label'
export { default as FieldLegend } from './field-legend'
export { default as FieldSeparator } from './field-separator'
export { default as FieldSet } from './field-set'
export { default as FieldTitle } from './field-title'
