import type { ComputedRef, InjectionKey } from 'vue'
import type { progressCircleVariants } from '@heroui/styles'

/** The `progressCircleVariants()` slot map — one class-name function per ProgressCircle part. */
export type ProgressCircleSlots = ReturnType<typeof progressCircleVariants>

export interface ProgressCircleContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<ProgressCircleSlots>
  /** Clamped fill ratio, 0–100. */
  percentage: ComputedRef<number>
  /** Whether the circle is indeterminate (no `value` — shows a spinning arc). */
  isIndeterminate: ComputedRef<boolean>
}

/** Provided by `ProgressCircleRoot`, consumed by every compound part. */
export const PROGRESS_CIRCLE_CONTEXT: InjectionKey<ProgressCircleContext> =
  Symbol('heroui-vue-progress-circle')
