/**
 * CheckboxGroup — a faithful Vue port of HeroUI v3 `CheckboxGroup`.
 *
 * Like HeroUI, `CheckboxGroup` is a plain container — compose it with `Label`,
 * `Description` and real `Checkbox` components:
 *
 *   <CheckboxGroup>
 *     <Label>…</Label>
 *     <Description>…</Description>
 *     <Checkbox value="…">
 *       <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
 *       <Checkbox.Content><Label>…</Label><Description>…</Description></Checkbox.Content>
 *     </Checkbox>
 *   </CheckboxGroup>
 *
 * @see https://www.heroui.com/docs/react/components/checkbox-group
 */
import { CheckboxGroupRoot } from './checkbox-group'

/** Compound component — `CheckboxGroup.Root` (HeroUI v3 API). */
export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot
})

export { CheckboxGroupRoot }
export { CHECKBOX_GROUP_CONTEXT, type CheckboxGroupContext } from './checkbox-group-context'
export { checkboxGroupVariants } from '@heroui/styles'
export type { CheckboxGroupVariants } from '@heroui/styles'
