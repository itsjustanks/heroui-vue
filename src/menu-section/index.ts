/**
 * MenuSection — re-export folder mirroring upstream
 * `@heroui/react/components/menu-section`. Implementation lives in
 * `src/menubar/`.
 *
 * @see https://www.heroui.com/docs/react/components/dropdown
 */
import { MenubarSection as MenuSectionRoot } from '../menubar'

export const MenuSection = MenuSectionRoot
export { MenuSectionRoot }
export { menuSectionVariants } from '@heroui/styles'
export type { MenuSectionVariants } from '@heroui/styles'
