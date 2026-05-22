/**
 * HeroUI-Vue ComboBox / Autocomplete — faithful HeroUI v3 searchable select over
 * reka-ui `Combobox*`.
 *
 * Net-new primitive (no `shadcn-vue` base) — built fresh from HeroUI v3 specs.
 * Part of the HeroUI-for-Vue primitive library.
 *
 * HeroUI v3 ships this as two doc entries — `ComboBox` and `Autocomplete` — that
 * are the same component family (a text input + a filterable listbox). Both name
 * sets are exported here: the `ComboBox*` parts are canonical; the `Autocomplete*`
 * aliases point at the identical components.
 *
 * Anatomy (HeroUI dot-notation → this Vue flat API):
 *   ComboBox                → ComboBox        (alias: Autocomplete)
 *   ComboBox.InputGroup     → ComboBoxInputGroup
 *   ComboBox.Trigger        → ComboBoxTrigger (alias: AutocompleteIndicator)
 *   ComboBox.Popover        → ComboBoxPopover (alias: AutocompletePopover)
 *   (Input inside group)    → ComboBoxInput
 *   ListBox.Item            → ComboBoxItem
 *   ListBox.ItemIndicator   → ComboBoxItemIndicator
 *   ListBox.Section + Header → ComboBoxGroup (heading prop)
 *   Separator               → ComboBoxSeparator
 *   empty-state             → ComboBoxEmpty
 */
export { default as ComboBox } from './combo-box'
export { default as ComboBoxInputGroup } from './combo-box-input-group'
export { default as ComboBoxInput } from './combo-box-input'
export { default as ComboBoxTrigger } from './combo-box-trigger'
export { default as ComboBoxPopover } from './combo-box-popover'
export { default as ComboBoxItem } from './combo-box-item'
export { default as ComboBoxItemIndicator } from './combo-box-item-indicator'
export { default as ComboBoxGroup } from './combo-box-group'
export { default as ComboBoxSeparator } from './combo-box-separator'
export { default as ComboBoxEmpty } from './combo-box-empty'

// Autocomplete aliases — HeroUI's `Autocomplete` family is the same combobox.
export { default as Autocomplete } from './combo-box'
export { default as AutocompleteInputGroup } from './combo-box-input-group'
export { default as AutocompleteInput } from './combo-box-input'
export { default as AutocompleteIndicator } from './combo-box-trigger'
export { default as AutocompletePopover } from './combo-box-popover'
export { default as AutocompleteItem } from './combo-box-item'
export { default as AutocompleteItemIndicator } from './combo-box-item-indicator'
export { default as AutocompleteGroup } from './combo-box-group'
export { default as AutocompleteSeparator } from './combo-box-separator'
export { default as AutocompleteEmpty } from './combo-box-empty'
