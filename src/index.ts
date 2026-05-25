/**
 * heroui-vue — a faithful Vue 3 port of HeroUI v3, built on reka-ui.
 * Auto-generated barrel. Prefer per-component imports for tree-shaking.
 */
import './theme.css'

export * from './icons'
export { cn } from './lib/utils'
export { vHerouiState, type HerouiStateOptions } from './composables/use-heroui-state'
export { useFilter, type UseFilterOptions, type UseFilterReturn } from './composables/use-filter'
export { useOverlayState, type UseOverlayStateOptions, type OverlayState } from './composables/use-overlay-state'
/**
 * Minimal React-Aria-compatible stubs so ported demos that import these names
 * resolve. None of them have a working Vue implementation yet — they return
 * inert sensible defaults so the demos compile and render their non-virtualized
 * paths. Hand-port the affected demos for real behaviour.
 */
export { useLocale } from './composables/react-aria-stubs'
export { Collection, ListBoxLoadMoreItem, ListLayout, TableLayout, Virtualizer, useListData } from './composables/react-aria-stubs'
export * from './accordion'
export * from './alert-dialog'
export * from './alert'
/* Autocomplete — canonical Autocomplete-named exports live in src/autocomplete/. */
export {
  Autocomplete,
  AutocompleteRoot,
  AutocompleteInputGroup,
  AutocompleteTrigger,
  AutocompleteIndicator,
  AutocompletePopover,
  AutocompleteInput,
  AutocompleteValue,
  AutocompleteFilter,
  AutocompleteItem,
  AutocompleteItemIndicator,
  AutocompleteGroup,
  AutocompleteSeparator,
  AutocompleteEmpty,
  AutocompleteClearButton,
  autocompleteVariants,
  type AutocompleteVariants
} from './autocomplete'
export * from './avatar'
export * from './badge'
export * from './breadcrumbs'
export * from './button-group'
export * from './button'
export * from './calendar'
export * from './calendar-year-picker'
export * from './card'
export * from './checkbox-group'
export * from './checkbox'
export * from './chip'
export * from './close-button'
export * from './color-input-group'
export * from './color-picker'
export * from './combo-box'
export * from './date-field'
export * from './date-input-group'
export * from './date-picker'
export * from './date-range-picker'
export * from './description'
export * from './disclosure'
export * from './disclosure-group'
export * from './drawer'
export * from './dropdown'
export * from './empty-state'
export * from './error-message'
/* field — exports field-level primitives. FieldError/Fieldset live in their own dedicated folders. */
export {
  fieldVariants,
  type FieldVariants,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle
} from './field'
export * from './field-error'
export * from './fieldset'
export { Form, FormRoot } from './form'
export * from './header'
export * from './input-group'
export * from './input-otp'
export * from './input'
export * from './item'
export * from './kbd'
export * from './label'
export * from './link'
/* ListBox — Item/Section live in their own canonical folders. */
export {
  ListBox,
  ListBoxRoot,
  ListBoxItemIndicator,
  listboxVariants,
  listboxItemVariants,
  listboxSectionVariants,
  type ListBoxVariants,
  type ListBoxItemVariants,
  type ListBoxSectionVariants
} from './list-box'
export * from './list-box-item'
export * from './list-box-section'
/* Menu — MenuItem/MenuSection live in their own canonical folders. */
export { Menu, MenuRoot, menuVariants, type MenuVariants } from './menu'
export * from './menu-item'
export * from './menu-section'
export * from './menubar'
export * from './meter'
export * from './modal'
export * from './number-field'
export * from './pagination'
export * from './popover'
export * from './progress-circle'
export * from './progress-bar'
export * from './radio'
export * from './radio-group'
export * from './range-calendar'
export * from './scroll-shadow'
export * from './search-field'
export * from './select'
export * from './separator'
export * from './shimmer'
export * from './skeleton'
export * from './slider'
export * from './toast'
export * from './spinner'
export * from './surface'
export * from './switch-group'
export * from './switch'
export * from './table'
export * from './tabs'
export * from './tag-group'
export * from './textarea'
export * from './textfield'
export * from './time-field'
export * from './toggle-button-group'
export * from './toggle-button'
export * from './toolbar'
export * from './tooltip'
export * from './typography'
export * from './compat'
