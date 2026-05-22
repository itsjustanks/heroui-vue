import type { ComputedRef, InjectionKey } from 'vue'
import type { modalVariants } from '@heroui/styles'

/** The `modalVariants()` slot map — one class-name function per Modal part. */
export type ModalSlots = ReturnType<typeof modalVariants>

export interface ModalContext {
  /** Reactive slot map — recomputed when variant/scroll/size change. */
  slots: ComputedRef<ModalSlots>
}

/** Provided by `ModalRoot`, consumed by every compound part. */
export const MODAL_CONTEXT: InjectionKey<ModalContext> = Symbol('heroui-vue-modal')
