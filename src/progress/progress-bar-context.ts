import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { progressBarVariants } from '@heroui/styles'

/** The `progressBarVariants()` slot map — one class-name function per ProgressBar part. */
export type ProgressBarSlots = ReturnType<typeof progressBarVariants>

export interface ProgressBarContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<ProgressBarSlots>
  /** Current percentage (0–100), or `undefined` when indeterminate. */
  percentage: ComputedRef<number | undefined>
  /** Whether the bar is indeterminate (no `value`). */
  isIndeterminate: ComputedRef<boolean>
  /** Human-readable value text (e.g. "60%"). */
  valueText: ComputedRef<string>
}

/** Provided by `ProgressBarRoot`, consumed by compound parts. */
export const PROGRESS_BAR_CONTEXT: InjectionKey<ProgressBarContext> =
  Symbol('heroui-vue-progress-bar')
