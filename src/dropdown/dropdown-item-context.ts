import type { ComputedRef, InjectionKey } from 'vue'
import type { menuItemVariants } from '@heroui/styles'

/** Slot map produced by `menuItemVariants()`. */
export type MenuItemSlots = ReturnType<typeof menuItemVariants>

export interface DropdownItemContext {
  /** Reactive `menuItemVariants` slot map. */
  slots: ComputedRef<MenuItemSlots>
  /** Whether the item is currently selected (drives indicator `data-visible`). */
  isSelected: ComputedRef<boolean>
}

/** Provided by `DropdownItem`, consumed by `DropdownItemIndicator` and `DropdownSubmenuIndicator`. */
export const DROPDOWN_ITEM_CONTEXT: InjectionKey<DropdownItemContext> = Symbol('heroui-vue-dropdown-item')
