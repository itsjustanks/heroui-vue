import type { ComputedRef, InjectionKey } from 'vue'
import type { popoverVariants } from '@heroui/styles'

/** The `popoverVariants()` slot map — one class-name function per Popover part. */
export type PopoverSlots = ReturnType<typeof popoverVariants>

export interface PopoverContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<PopoverSlots>
}

/** Provided by `PopoverRoot`, consumed by every compound part. */
export const POPOVER_CONTEXT: InjectionKey<PopoverContext> = Symbol('heroui-vue-popover')
