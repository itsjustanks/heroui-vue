/**
 * CheckboxGroup — faithful Vue port of HeroUI v3 `CheckboxGroup` + inner `Checkbox` parts.
 *
 * HeroUI v3 exports `CheckboxGroup` as a standalone component; the inner items use the
 * `Checkbox` compound. This heroui-vue family mirrors that structure with named parts:
 *   CheckboxGroup              → CheckboxGroupRoot / CheckboxGroup
 *   Label (in group)           → CheckboxGroupLabel
 *   Description (in group)     → CheckboxGroupDescription
 *   Checkbox (in group)        → CheckboxGroupItem
 *   Checkbox.Control           → CheckboxGroupItemControl
 *   Checkbox.Indicator         → CheckboxGroupItemIndicator
 *   Checkbox.Content           → CheckboxGroupItemContent
 *   Label (in Content)         → CheckboxGroupItemLabel
 *   Description (in Content)   → CheckboxGroupDescription
 *   FieldError                 → CheckboxGroupError
 */
import { CheckboxGroupRoot } from './checkbox-group'
import { CheckboxGroupLabel } from './checkbox-group-label'
import { CheckboxGroupDescription } from './checkbox-group-description'
import { CheckboxGroupError } from './checkbox-group-error'
import { CheckboxGroupItem } from './checkbox-group-item'
import { CheckboxGroupItemControl } from './checkbox-group-item-control'
import { CheckboxGroupItemIndicator } from './checkbox-group-item-indicator'
import { CheckboxGroupItemContent } from './checkbox-group-item-content'
import { CheckboxGroupItemLabel } from './checkbox-group-item-label'

/** Compound component — `CheckboxGroup.Label`, `CheckboxGroup.Item`, … (HeroUI v3 API). */
export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot,
  Label: CheckboxGroupLabel,
  Description: CheckboxGroupDescription,
  Error: CheckboxGroupError,
  Item: CheckboxGroupItem,
  ItemControl: CheckboxGroupItemControl,
  ItemIndicator: CheckboxGroupItemIndicator,
  ItemContent: CheckboxGroupItemContent,
  ItemLabel: CheckboxGroupItemLabel
})

export {
  CheckboxGroupRoot,
  CheckboxGroupLabel,
  CheckboxGroupDescription,
  CheckboxGroupError,
  CheckboxGroupItem,
  CheckboxGroupItemControl,
  CheckboxGroupItemIndicator,
  CheckboxGroupItemContent,
  CheckboxGroupItemLabel
}

export {
  useCheckboxGroup,
  provideCheckboxGroupContext
} from './checkbox-group-context'
export type {
  ICheckboxGroupContext,
  CheckboxGroupVariantProp
} from './checkbox-group-context'

export { checkboxGroupVariants } from '@heroui/styles'
export type { CheckboxGroupVariants } from '@heroui/styles'
