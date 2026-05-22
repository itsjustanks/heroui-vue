import type { ComputedRef, InjectionKey } from 'vue'
import type { dateRangePickerVariants } from '@heroui/styles'

/** The `dateRangePickerVariants()` slot map — one class-name function per DateRangePicker part. */
export type DateRangePickerSlots = ReturnType<typeof dateRangePickerVariants>

export interface DateRangePickerContext {
  /** Reactive slot map — recomputed when variant props change. */
  slots: ComputedRef<DateRangePickerSlots>
}

/** Provided by `DateRangePickerRoot`, consumed by every compound part. */
export const DATE_RANGE_PICKER_CONTEXT: InjectionKey<DateRangePickerContext> =
  Symbol('heroui-vue-date-range-picker')
