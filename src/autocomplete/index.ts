/**
 * Autocomplete — faithful Vue port of HeroUI v3 `Autocomplete`.
 *
 * Implementation is shared with `ComboBox` (`src/combo-box/`) because the
 * underlying behaviour — a text input that filters a popover listbox — is
 * the same. HeroUI ships both names; this folder mirrors the upstream layout
 * so consumers can import either way:
 *
 *   import { Autocomplete } from 'heroui-vue/autocomplete'
 *   import { ComboBox }     from 'heroui-vue/combo-box'
 *
 * Compound API (HeroUI v3): `Autocomplete`, `.Root`, `.Trigger`,
 * `.Indicator`, `.Popover`, `.Value`, `.Filter`, `.ClearButton`.
 *
 * @see https://www.heroui.com/docs/react/components/autocomplete
 */
import {
  ComboBoxRoot,
  ComboBoxInputGroup,
  ComboBoxTrigger,
  ComboBoxPopover,
  ComboBoxInput,
  ComboBoxItem,
  ComboBoxItemIndicator,
  ComboBoxGroup,
  ComboBoxSeparator,
  ComboBoxEmpty,
} from '../combo-box'

/* Canonical Autocomplete-named flat exports. */
export {
  ComboBoxRoot          as AutocompleteRoot,
  ComboBoxInputGroup    as AutocompleteInputGroup,
  ComboBoxTrigger       as AutocompleteTrigger,
  ComboBoxTrigger       as AutocompleteIndicator,
  ComboBoxPopover       as AutocompletePopover,
  ComboBoxInput         as AutocompleteInput,
  ComboBoxInput         as AutocompleteValue,
  ComboBoxInput         as AutocompleteFilter,
  ComboBoxItem          as AutocompleteItem,
  ComboBoxItemIndicator as AutocompleteItemIndicator,
  ComboBoxGroup         as AutocompleteGroup,
  ComboBoxSeparator     as AutocompleteSeparator,
  ComboBoxEmpty         as AutocompleteEmpty,
}

/** Trailing clear button — Autocomplete-specific UX affordance. */
export { CloseButton as AutocompleteClearButton } from '../close-button'

/** Compound — `Autocomplete.Root`, `.Trigger`, `.Indicator`, `.Popover`, `.Value`, `.Filter`, `.ClearButton`. */
import { CloseButton } from '../close-button'
export const Autocomplete = Object.assign(ComboBoxRoot, {
  Root:        ComboBoxRoot,
  InputGroup:  ComboBoxInputGroup,
  Trigger:     ComboBoxTrigger,
  Indicator:   ComboBoxTrigger,
  Popover:     ComboBoxPopover,
  Input:       ComboBoxInput,
  Value:       ComboBoxInput,
  Filter:      ComboBoxInput,
  Item:        ComboBoxItem,
  ItemIndicator: ComboBoxItemIndicator,
  Group:       ComboBoxGroup,
  Separator:   ComboBoxSeparator,
  Empty:       ComboBoxEmpty,
  ClearButton: CloseButton,
})

export { autocompleteVariants } from '@heroui/styles'
export type { AutocompleteVariants } from '@heroui/styles'
