import type { ComputedRef, InjectionKey } from 'vue'
import type { tabsVariants } from '@heroui/styles'

/** The `tabsVariants()` slot map — one class-name function per Tabs part. */
export type TabsSlots = ReturnType<typeof tabsVariants>

export interface TabsContext {
  /** Reactive slot map — recomputed when the root `variant` changes. */
  slots: ComputedRef<TabsSlots>
  /**
   * Flow axis. `TabList` needs this to emit `data-orientation` itself —
   * reka-ui's `TabsList` only emits `aria-orientation`, but HeroUI's CSS
   * (`.tabs__list[data-orientation="…"]`) keys its layout off `data-orientation`.
   */
  orientation: ComputedRef<'horizontal' | 'vertical'>
}

/** Provided by `TabsRoot`, consumed by every compound part. */
export const TABS_CONTEXT: InjectionKey<TabsContext> = Symbol('heroui-vue-tabs')
