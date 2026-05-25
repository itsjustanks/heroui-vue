/**
 * SearchField — faithful Vue port of HeroUI v3 `SearchField`.
 *
 * Compound API (HeroUI v3):
 *   `SearchField` / `SearchField.Root`
 *   `SearchField.Group`
 *   `SearchField.Input`
 *   `SearchField.SearchIcon`
 *   `SearchField.ClearButton`
 *
 * HeroUI builds on React-Aria's `SearchField`; reka-ui has no equivalent, so
 * the small query-string state lives in `SearchFieldRoot` and is shared via
 * context. The BEM classes come from `@heroui/styles` `searchFieldVariants`.
 *
 * @see https://www.heroui.com/docs/react/components/search-field
 */
import { SearchFieldRoot } from './search-field'
import { SearchFieldGroup } from './search-field-group'
import { SearchFieldInput } from './search-field-input'
import { SearchFieldSearchIcon } from './search-field-search-icon'
import { SearchFieldClearButton } from './search-field-clear-button'

/** Compound component — `SearchField.Group`, `SearchField.Input`, … (HeroUI v3 API). */
export const SearchField = Object.assign(SearchFieldRoot, {
  Root: SearchFieldRoot,
  Group: SearchFieldGroup,
  Input: SearchFieldInput,
  SearchIcon: SearchFieldSearchIcon,
  ClearButton: SearchFieldClearButton
})

export {
  SearchFieldRoot,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
  SearchFieldClearButton
}

export { searchFieldVariants } from '@heroui/styles'
export type { SearchFieldVariants } from '@heroui/styles'
