import type { ComputedRef, InjectionKey } from 'vue'
import type { drawerVariants } from '@heroui/styles'

export type DrawerPlacement = 'top' | 'bottom' | 'left' | 'right'

/** The `drawerVariants()` slot map — one class-name function per Drawer part. */
export type DrawerSlots = ReturnType<typeof drawerVariants>

export interface DrawerContext {
  /** Reactive slot map — recomputed when placement/variant change. */
  slots: ComputedRef<DrawerSlots>
  /** The active placement, provided by DrawerContent and read by DrawerDialog. */
  placement: ComputedRef<DrawerPlacement>
}

/** Provided by `DrawerRoot`, refined by `DrawerContent`, consumed by every compound part. */
export const DRAWER_CONTEXT: InjectionKey<DrawerContext> = Symbol('heroui-vue-drawer')
