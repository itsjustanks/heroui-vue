import type { ComputedRef, InjectionKey } from 'vue'
import type { menuItemVariants } from '@heroui/styles'

/** Slot map produced by `menuItemVariants()`. */
export type MenuItemSlots = ReturnType<typeof menuItemVariants>

export interface MenubarItemContext {
  /** Reactive `menuItemVariants` slot map. */
  slots: ComputedRef<MenuItemSlots>
  /** Whether the item is currently selected (drives indicator `data-visible`). */
  isSelected: ComputedRef<boolean>
}

/** Provided by `MenubarItem`, consumed by `MenubarItemIndicator` and `MenubarSubTrigger`. */
export const MENUBAR_ITEM_CONTEXT: InjectionKey<MenubarItemContext> = Symbol('heroui-vue-menubar-item')
