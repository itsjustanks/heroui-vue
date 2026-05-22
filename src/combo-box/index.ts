/**
 * ComboBox — HeroUI v3 compound searchable select over reka-ui (headless behaviour).
 *
 * Compound API (HeroUI v3): `ComboBox`, `ComboBox.Root`, `ComboBox.InputGroup`,
 * `ComboBox.Trigger`, `ComboBox.Popover`.
 *
 * HeroUI v3 ships this family as both `ComboBox` and `Autocomplete` (same
 * component, two doc entries). Both name sets are exported; `ComboBox*` is canonical.
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

export { ComboBoxInput } from './combo-box-input'
export { ComboBoxItem } from './combo-box-item'
export { ComboBoxItemIndicator } from './combo-box-item-indicator'
export { ComboBoxGroup } from './combo-box-group'
export { ComboBoxSeparator } from './combo-box-separator'
export { ComboBoxEmpty } from './combo-box-empty'

// Autocomplete aliases — HeroUI's `Autocomplete` family is the same combobox.
export { ComboBoxRoot as Autocomplete }
export { ComboBoxRoot as AutocompleteRoot }
export { ComboBoxInputGroup as AutocompleteInputGroup }
export { ComboBoxInput as AutocompleteInput } from './combo-box-input'
export { ComboBoxTrigger as AutocompleteIndicator }
export { ComboBoxPopover as AutocompletePopover }
export { ComboBoxItem as AutocompleteItem } from './combo-box-item'
export { ComboBoxItemIndicator as AutocompleteItemIndicator } from './combo-box-item-indicator'
export { ComboBoxGroup as AutocompleteGroup } from './combo-box-group'
export { ComboBoxSeparator as AutocompleteSeparator } from './combo-box-separator'
export { ComboBoxEmpty as AutocompleteEmpty } from './combo-box-empty'

export { comboBoxVariants } from '@heroui/styles'
export type { ComboBoxVariants } from '@heroui/styles'
