/**
 * MenuItem — re-export folder mirroring upstream
 * `@heroui/react/components/menu-item`. Implementation lives in `src/menubar/`.
 *
 * @see https://www.heroui.com/docs/react/components/dropdown
 */
import { MenubarItem as MenuItemRoot, MenubarItemIndicator as MenuItemIndicator } from '../menubar'

/** Compound — `MenuItem.Root`, `MenuItem.Indicator`, `MenuItem.SubmenuIndicator`. */
export const MenuItem = Object.assign(MenuItemRoot, {
  Root: MenuItemRoot,
  Indicator: MenuItemIndicator,
  SubmenuIndicator: MenuItemIndicator,
})

export {
  MenuItemRoot,
  MenuItemIndicator,
  MenuItemIndicator as MenuItemSubmenuIndicator,
}
export { menuItemVariants } from '@heroui/styles'
export type { MenuItemVariants } from '@heroui/styles'
