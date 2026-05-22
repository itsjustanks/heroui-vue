import type { ComputedRef, InjectionKey } from 'vue'
import type { listboxItemVariants } from '@heroui/styles'

/** The `listboxItemVariants()` slot map — `item` and `indicator`. */
export type ListBoxItemSlots = ReturnType<typeof listboxItemVariants>

export interface ListBoxItemContext {
  /** Reactive slot map — recomputed when item `variant` changes. */
  slots: ComputedRef<ListBoxItemSlots>
  /** Whether this item is currently selected (from reka-ui context). */
  isSelected: ComputedRef<boolean>
}

/** Provided by `ListBoxItemRoot`, consumed by `ListBoxItemIndicator`. */
export const LIST_BOX_ITEM_CONTEXT: InjectionKey<ListBoxItemContext> =
  Symbol('heroui-vue-list-box-item')
