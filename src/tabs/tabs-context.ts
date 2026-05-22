import type { ComputedRef, InjectionKey } from 'vue'
import type { tabsVariants } from '@heroui/styles'

/** The `tabsVariants()` slot map — one class-name function per Tabs part. */
export type TabsSlots = ReturnType<typeof tabsVariants>

export interface TabsContext {
  /** Reactive slot map — recomputed when the root `variant` changes. */
  slots: ComputedRef<TabsSlots>
}

/** Provided by `TabsRoot`, consumed by every compound part. */
export const TABS_CONTEXT: InjectionKey<TabsContext> = Symbol('heroui-vue-tabs')
