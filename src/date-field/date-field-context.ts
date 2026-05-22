import type { ComputedRef, InjectionKey } from 'vue'
import type { dateInputGroupVariants } from '@heroui/styles'

/** The `dateInputGroupVariants()` slot map — one class-name function per date-input-group part. */
export type DateInputGroupSlots = ReturnType<typeof dateInputGroupVariants>

export interface DateFieldContext {
  /** Reactive slot map — recomputed when variant/fullWidth change. */
  slots: ComputedRef<DateInputGroupSlots>
}

/** Provided by `DateField.Group`, consumed by `DateField.Input`, `.Segment`, `.Prefix`, `.Suffix`. */
export const DATE_FIELD_CONTEXT: InjectionKey<DateFieldContext> = Symbol('heroui-vue-date-field')
