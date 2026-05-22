import type { ComputedRef, InjectionKey } from 'vue'
import type { chipVariants } from '@heroui/styles'

/** The `chipVariants()` slot map — one class-name function per Chip part. */
export type ChipSlots = ReturnType<typeof chipVariants>

export interface ChipContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<ChipSlots>
}

/** Provided by `Chip`, consumed by `Chip.Label`. */
export const CHIP_CONTEXT: InjectionKey<ChipContext> = Symbol('heroui-vue-chip')
