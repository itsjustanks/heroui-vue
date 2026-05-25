/**
 * Menu — re-export folder mirroring upstream `@heroui/react/components/menu`.
 *
 * Implementation lives in `src/menubar/` (heroui-vue uses a single Menubar
 * surface to back both the standalone Menu compound and the Menubar
 * horizontal bar — the BEM classes from `@heroui/styles` are shared).
 *
 * @see https://www.heroui.com/docs/react/components/dropdown
 */
import {
  MenubarContent as MenuRoot,
  MenubarItem as _MenuItemRoot,
  MenubarItemIndicator as _MenuItemIndicator,
  MenubarSection as _MenuSectionRoot,
} from '../menubar'

/** Sub-compound — `Menu.Item.Root`, `Menu.Item.Indicator`, `Menu.Item.SubmenuIndicator`. */
const MenuItem = Object.assign(_MenuItemRoot, {
  Root: _MenuItemRoot,
  Indicator: _MenuItemIndicator,
  SubmenuIndicator: _MenuItemIndicator,
})

/** Compound — `Menu.Item`, `Menu.ItemIndicator`, `Menu.Section` (HeroUI v3 API). */
export const Menu = Object.assign(MenuRoot, {
  Root: MenuRoot,
  Item: MenuItem,
  Indicator: _MenuItemIndicator,
  ItemIndicator: _MenuItemIndicator,
  SubmenuIndicator: _MenuItemIndicator,
  Section: _MenuSectionRoot,
})

export { MenuRoot, MenuItem, _MenuItemRoot as MenuItemRoot, _MenuItemIndicator as MenuItemIndicator, _MenuSectionRoot as MenuSectionRoot }
export { menuVariants } from '@heroui/styles'
export type { MenuVariants } from '@heroui/styles'
