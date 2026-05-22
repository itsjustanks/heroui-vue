import type { ComputedRef, InjectionKey } from 'vue'
import type { numberFieldVariants } from '@heroui/styles'

/** The `numberFieldVariants()` slot map — one class-name function per NumberField part. */
export type NumberFieldSlots = ReturnType<typeof numberFieldVariants>

export interface NumberFieldContext {
  /** Reactive slot map — recomputed when variant/fullWidth change. */
  slots: ComputedRef<NumberFieldSlots>
}

/** Provided by `NumberFieldRoot`, consumed by every compound part. */
export const NUMBER_FIELD_CONTEXT: InjectionKey<NumberFieldContext> = Symbol('heroui-vue-number-field')
