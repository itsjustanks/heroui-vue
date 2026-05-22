import type { ComputedRef, InjectionKey } from 'vue'
import type { switchVariants } from '@heroui/styles'

/** The `switchVariants()` slot map — one class-name function per Switch part. */
export type SwitchSlots = ReturnType<typeof switchVariants>

export interface SwitchContext {
  /** Reactive slot map — recomputed when the root `size` changes. */
  slots: ComputedRef<SwitchSlots>
}

/** Provided by `SwitchRoot`, consumed by `Switch.Control`, `Switch.Thumb`, `Switch.Icon`, `Switch.Content`. */
export const SWITCH_CONTEXT: InjectionKey<SwitchContext> = Symbol('heroui-vue-switch')
