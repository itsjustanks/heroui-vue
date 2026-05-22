import type { ComputedRef, InjectionKey } from 'vue'
import type { rangeCalendarVariants } from '@heroui/styles'

/** The `rangeCalendarVariants()` slot map — one class-name function per RangeCalendar part. */
export type RangeCalendarSlots = ReturnType<typeof rangeCalendarVariants>

export interface RangeCalendarContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<RangeCalendarSlots>
}

/** Provided by `RangeCalendarRoot`, consumed by every compound part. */
export const RANGE_CALENDAR_CONTEXT: InjectionKey<RangeCalendarContext> = Symbol('heroui-vue-range-calendar')
