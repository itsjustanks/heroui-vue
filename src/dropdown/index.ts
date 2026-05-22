/**
 * HeroUI-Vue Dropdown — primitive library port #1.
 *
 * A faithful HeroUI v3 dropdown for Vue, over reka-ui (headless behaviour).
 * See `.planning/prps/heroui-vue-dropdown.md` and the program plan
 * `.planning/prps/heroui-vue-library.md`.
 *
 * Granular parts keep reka-ui-style names so call-site migration is a mechanical
 * import-path swap. (The app-specific actions-array + mobile-sheet wrapper
 * `CustomDropdown` lives in `@/components/custom/dropdown` — it is not a primitive.)
 *
 * `Dropdown` + `DropdownItem` are the legacy 2-part Popover-backed dropdown
 * (port of `shadcn/dropdown`) — a distinct, smaller primitive from the 14-part
 * `DropdownMenu*` family above; the names do not collide.
 */
export { default as DropdownMenu } from './dropdown-menu'
export { default as DropdownMenuTrigger } from './dropdown-menu-trigger'
export { default as DropdownMenuContent } from './dropdown-menu-content'
export { default as DropdownMenuItem } from './dropdown-menu-item'
export { default as DropdownMenuSeparator } from './dropdown-menu-separator'
export { default as DropdownMenuLabel } from './dropdown-menu-label'
export { default as DropdownMenuGroup } from './dropdown-menu-group'
export { default as DropdownMenuShortcut } from './dropdown-menu-shortcut'
export { default as DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item'
export { default as DropdownMenuRadioGroup } from './dropdown-menu-radio-group'
export { default as DropdownMenuRadioItem } from './dropdown-menu-radio-item'
export { default as DropdownMenuSub } from './dropdown-menu-sub'
export { default as DropdownMenuSubTrigger } from './dropdown-menu-sub-trigger'
export { default as DropdownMenuSubContent } from './dropdown-menu-sub-content'
export { DropdownMenuPortal } from 'reka-ui'
export { default as Dropdown } from './dropdown'
export { default as DropdownItem } from './dropdown-item'
