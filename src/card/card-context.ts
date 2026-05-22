import type { ComputedRef, InjectionKey } from 'vue'
import type { cardVariants } from '@heroui/styles'

/** The `cardVariants()` slot map — one class-name function per Card part. */
export type CardSlots = ReturnType<typeof cardVariants>

export interface CardContext {
  /** Reactive slot map — recomputed when the root `variant` changes. */
  slots: ComputedRef<CardSlots>
}

/** Provided by `Card`, consumed by every compound part. */
export const CARD_CONTEXT: InjectionKey<CardContext> = Symbol('heroui-vue-card')
