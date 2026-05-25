/**
 * ComboBox — HeroUI v3 compound searchable select over reka-ui (headless behaviour).
 *
 * Compound API (HeroUI v3): `ComboBox`, `ComboBox.Root`, `ComboBox.InputGroup`,
 * `ComboBox.Trigger`, `ComboBox.Popover`.
 *
 * HeroUI v3 ships this family as both `ComboBox` and `Autocomplete` (same
 * component, two doc entries). Both name sets are exported; `ComboBox*` is canonical.
 *
 * @see https://www.heroui.com/docs/react/components/combo-box
 */
import { ComboBoxRoot } from './combo-box'
import { ComboBoxInputGroup } from './combo-box-input-group'
import { ComboBoxTrigger } from './combo-box-trigger'
import { ComboBoxPopover } from './combo-box-popover'

/** Compound component — `ComboBox.InputGroup`, `ComboBox.Trigger`, … (HeroUI v3 API). */
export const ComboBox = Object.assign(ComboBoxRoot, {
  Root: ComboBoxRoot,
  InputGroup: ComboBoxInputGroup,
  Trigger: ComboBoxTrigger,
  Popover: ComboBoxPopover
})

export { ComboBoxRoot, ComboBoxInputGroup, ComboBoxTrigger, ComboBoxPopover }

/** ComboBoxContext — re-exported to match HeroUI v3 React's named export. */
export { COMBO_BOX_CONTEXT as ComboBoxContext } from './combo-box-context'

export { ComboBoxInput } from './combo-box-input'
export { ComboBoxItem } from './combo-box-item'
export { ComboBoxItemIndicator } from './combo-box-item-indicator'
export { ComboBoxGroup } from './combo-box-group'
export { ComboBoxSeparator } from './combo-box-separator'
export { ComboBoxEmpty } from './combo-box-empty'

// Note: `Autocomplete*` aliases are exported from `src/autocomplete/` —
// see `import { Autocomplete } from 'heroui-vue/autocomplete'`.

export { comboBoxVariants } from '@heroui/styles'
export type { ComboBoxVariants } from '@heroui/styles'
