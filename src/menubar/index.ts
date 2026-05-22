/**
 * Menubar — HeroUI v3 `Menubar` compound component for Vue.
 *
 * The menubar uses HeroUI's `menu` / `menu-item` / `menu-section` surface
 * (there is no separate `menubar` package in `@heroui/styles`).
 *
 * Compound API:
 *   `Menubar`                     — root bar (MenubarRoot, provides context)
 *   `Menubar.Menu`                — a single menu within the bar (trigger + content pair)
 *   `Menubar.Trigger`             — bar-level trigger button
 *   `Menubar.Content`             — popover surface (menu) — carries overlay shim
 *   `Menubar.Item`                — menu row (menu-item)
 *   `Menubar.ItemIndicator`       — leading checkmark / dot span (menu-item__indicator)
 *   `Menubar.Section`             — grouped section (menu-section)
 *   `Menubar.Sub`                 — sub-menu root
 *   `Menubar.SubTrigger`          — sub-menu trigger row
 *   `Menubar.SubContent`          — sub-menu popover surface — carries overlay shim
 *   `Menubar.RadioGroup`          — single-selection radio group
 *   `Menubar.RadioItem`           — radio row (menu-item with dot indicator)
 *   `Menubar.CheckboxItem`        — checkbox row (menu-item with checkmark indicator)
 *   `Menubar.Separator`           — divider (separator)
 *   `Menubar.Label`               — section heading label
 *   `Menubar.Shortcut`            — trailing keyboard-hint text
 */
import { MenubarRoot } from './menubar'
import { MenubarMenu } from './menubar-menu'
import { MenubarTrigger } from './menubar-trigger'
import { MenubarContent } from './menubar-content'
import { MenubarItem } from './menubar-item'
import { MenubarItemIndicator } from './menubar-item-indicator'
import { MenubarSection } from './menubar-section'
import { MenubarSub } from './menubar-sub'
import { MenubarSubTrigger } from './menubar-sub-trigger'
import { MenubarSubContent } from './menubar-sub-content'
import { MenubarRadioGroup } from './menubar-radio-group'
import { MenubarRadioItem } from './menubar-radio-item'
import { MenubarCheckboxItem } from './menubar-checkbox-item'
import { MenubarSeparator } from './menubar-separator'
import { MenubarLabel } from './menubar-label'
import { MenubarShortcut } from './menubar-shortcut'

/** Compound component — mirrors HeroUI v3 `Menu` API extended for the menubar. */
export const Menubar = Object.assign(MenubarRoot, {
  Root: MenubarRoot,
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Content: MenubarContent,
  Item: MenubarItem,
  ItemIndicator: MenubarItemIndicator,
  Section: MenubarSection,
  Sub: MenubarSub,
  SubTrigger: MenubarSubTrigger,
  SubContent: MenubarSubContent,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  CheckboxItem: MenubarCheckboxItem,
  Separator: MenubarSeparator,
  Label: MenubarLabel,
  Shortcut: MenubarShortcut,
})

export {
  MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarSection,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarCheckboxItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
}

export { menuVariants } from '@heroui/styles'
export type { MenuVariants } from '@heroui/styles'
export { menuItemVariants } from '@heroui/styles'
export type { MenuItemVariants } from '@heroui/styles'
export { menuSectionVariants } from '@heroui/styles'
export type { MenuSectionVariants } from '@heroui/styles'
