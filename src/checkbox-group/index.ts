/**
 * HeroUI-Vue CheckboxGroup — faithful HeroUI v3 checkbox group over reka-ui
 * `CheckboxGroupRoot` + `CheckboxRoot`.
 *
 * Net-new primitive (no `shadcn/` base) — built fresh from HeroUI v3 specs.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * The root owns the shared `string[]` value (`v-model`) and provides variant /
 * disabled / invalid state to its items.
 *
 * Anatomy (HeroUI dot-notation → this Vue flat API):
 *   CheckboxGroup           → CheckboxGroup
 *   Label (in group)        → CheckboxGroupLabel
 *   Description (in group)  → CheckboxGroupDescription
 *   Checkbox (in group)     → CheckboxGroupItem (value prop)
 *   Checkbox.Control        → CheckboxGroupItemControl
 *   Checkbox.Indicator      → CheckboxGroupItemIndicator
 *   Checkbox.Content        → CheckboxGroupItemContent
 *   Label (in Content)      → CheckboxGroupItemLabel
 *   Description (in Content) → CheckboxGroupDescription
 *   FieldError              → CheckboxGroupError
 */
export { default as CheckboxGroup } from './checkbox-group'
export { default as CheckboxGroupLabel } from './checkbox-group-label'
export { default as CheckboxGroupDescription } from './checkbox-group-description'
export { default as CheckboxGroupItem } from './checkbox-group-item'
export { default as CheckboxGroupItemControl } from './checkbox-group-item-control'
export { default as CheckboxGroupItemIndicator } from './checkbox-group-item-indicator'
export { default as CheckboxGroupItemContent } from './checkbox-group-item-content'
export { default as CheckboxGroupItemLabel } from './checkbox-group-item-label'
export { default as CheckboxGroupError } from './checkbox-group-error'

export {
  useCheckboxGroup,
  provideCheckboxGroupContext
} from './checkbox-group-context'
export type {
  ICheckboxGroupContext,
  TCheckboxGroupVariant
} from './checkbox-group-context'
