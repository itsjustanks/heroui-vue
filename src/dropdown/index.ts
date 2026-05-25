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
 *
 * @see https://www.heroui.com/docs/react/components/dropdown
 */
import { DropdownRoot } from './dropdown-root'
import { DropdownTrigger } from './dropdown-trigger'
import { DropdownPopover } from './dropdown-popover'
import { DropdownMenu as DropdownMenuList } from './dropdown-menu'
import { DropdownSection } from './dropdown-section'
import { DropdownItem } from './dropdown-item'
import { DropdownItemIndicator } from './dropdown-item-indicator'
import { DropdownSubmenuIndicator } from './dropdown-submenu-indicator'
import { DropdownSubmenuTrigger } from './dropdown-submenu-trigger'
import { DropdownSub } from './dropdown-sub'
import { DropdownSubPopover } from './dropdown-sub-popover'
import { Separator } from '@/separator'
import { h } from 'vue'

const DropdownContent = (props: any, { slots, attrs }: any) => h(
  DropdownPopover,
  { ...attrs, class: props?.class, side: props?.side, align: props?.align, sideOffset: props?.sideOffset },
  () => h(DropdownMenuList, null, () => slots.default?.())
)

const DropdownLabel = (props: any, { slots, attrs }: any) => h('div', { ...attrs, class: props?.class }, slots.default?.())

const DropdownSeparator = (props: any, { attrs }: any) => h(Separator, { ...attrs, class: props?.class })

/** Compound component — matches HeroUI v3 `Dropdown` API exactly. */
export const Dropdown = Object.assign(DropdownRoot, {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Popover: DropdownPopover,
  /** @deprecated Use `Dropdown.Popover` with `Dropdown.Menu`. */
  Content: DropdownContent,
  Menu: DropdownMenuList,
  Section: DropdownSection,
  Group: DropdownSection,
  Label: DropdownLabel,
  Item: DropdownItem,
  Separator: DropdownSeparator,
  ItemIndicator: DropdownItemIndicator,
  SubmenuIndicator: DropdownSubmenuIndicator,
  SubmenuTrigger: DropdownSubmenuTrigger,
})

/** @deprecated Use `Dropdown`. Kept for shadcn-style migration call sites. */
export const DropdownMenu = Dropdown

export {
  DropdownRoot,
  DropdownTrigger,
  DropdownPopover,
  DropdownMenuList,
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
