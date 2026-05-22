import type { ComputedRef, InjectionKey } from 'vue'
import type { meterVariants } from '@heroui/styles'

/** The `meterVariants()` slot map — one class-name function per Meter part. */
export type MeterSlots = ReturnType<typeof meterVariants>

export interface MeterContext {
  /** Reactive slot map — recomputed when color/size change. */
  slots: ComputedRef<MeterSlots>
  /** Clamped fill percentage, 0–100. */
  percentage: ComputedRef<number>
  /** Formatted value text (defaults to a percent string). */
  valueText: ComputedRef<string>
}

/** Provided by `Meter`, consumed by every compound part. */
export const METER_CONTEXT: InjectionKey<MeterContext> = Symbol('heroui-vue-meter')
