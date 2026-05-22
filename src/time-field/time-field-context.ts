import type { ComputedRef, InjectionKey } from 'vue'
import type { dateInputGroupVariants } from '@heroui/styles'

/** The `dateInputGroupVariants()` slot map — one class-name function per date-input-group part. */
export type DateInputGroupSlots = ReturnType<typeof dateInputGroupVariants>

export interface TimeFieldContext {
  /** Reactive slot map — recomputed when variant/fullWidth change. */
  slots: ComputedRef<DateInputGroupSlots>
}

/** Provided by `TimeField.Group`, consumed by `TimeField.Input`, `.Segment`, `.Prefix`, `.Suffix`. */
export const TIME_FIELD_CONTEXT: InjectionKey<TimeFieldContext> = Symbol('heroui-vue-time-field')
