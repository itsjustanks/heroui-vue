/**
 * Dropdown — HeroUI v3 `Dropdown` compound component for Vue.
 *
 * Compound API (HeroUI v3):
 *   `Dropdown`                 — root (DropdownMenuRoot, provides context)
 *   `Dropdown.Trigger`         — trigger button (dropdown__trigger)
 *   `Dropdown.Popover`         — popover surface (dropdown__popover) — carries overlay shim
 *   `Dropdown.Menu`            — inner list container (dropdown__menu)
 *   `Dropdown.Section`         — grouped section (menu-section)
 *   `Dropdown.Item`            — menu row (menu-item)
 *   `Dropdown.ItemIndicator`   — leading checkmark / dot span (menu-item__indicator)
 *   `Dropdown.SubmenuIndicator`— trailing chevron span (menu-item__indicator--submenu)
 *   `Dropdown.SubmenuTrigger`  — submenu trigger row
 *
 * Additional helpers (not in HeroUI v3 but retained for reka-ui parity):
 *   `DropdownSub`              — sub-root (DropdownMenuSub)
 *   `DropdownSubPopover`       — nested submenu popover surface (carries overlay shim)
 */
import { DropdownRoot } from './dropdown-root'
import { DropdownTrigger } from './dropdown-trigger'
import { DropdownPopover } from './dropdown-popover'
import { DropdownMenu } from './dropdown-menu'
import { DropdownSection } from './dropdown-section'
import { DropdownItem } from './dropdown-item'
import { DropdownItemIndicator } from './dropdown-item-indicator'
import { DropdownSubmenuIndicator } from './dropdown-submenu-indicator'
import { DropdownSubmenuTrigger } from './dropdown-submenu-trigger'
import { DropdownSub } from './dropdown-sub'
import { DropdownSubPopover } from './dropdown-sub-popover'

/** Compound component — matches HeroUI v3 `Dropdown` API exactly. */
export const Dropdown = Object.assign(DropdownRoot, {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Popover: DropdownPopover,
  Menu: DropdownMenu,
  Section: DropdownSection,
  Item: DropdownItem,
  ItemIndicator: DropdownItemIndicator,
  SubmenuIndicator: DropdownSubmenuIndicator,
  SubmenuTrigger: DropdownSubmenuTrigger,
})

export {
  DropdownRoot,
  DropdownTrigger,
  DropdownPopover,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  DropdownItemIndicator,
  DropdownSubmenuIndicator,
  DropdownSubmenuTrigger,
  DropdownSub,
  DropdownSubPopover,
}

export { dropdownVariants } from '@heroui/styles'
export type { DropdownVariants } from '@heroui/styles'
export { menuItemVariants } from '@heroui/styles'
export type { MenuItemVariants } from '@heroui/styles'
export { menuSectionVariants } from '@heroui/styles'
export type { MenuSectionVariants } from '@heroui/styles'
