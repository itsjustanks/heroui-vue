import type { ComputedRef, InjectionKey } from 'vue'
import type { inputGroupVariants } from '@heroui/styles'

/** The `inputGroupVariants()` slot map — one class-name function per InputGroup part. */
export type InputGroupSlots = ReturnType<typeof inputGroupVariants>

export interface InputGroupContext {
  /** Reactive slot map — recomputed when variant/fullWidth change. */
  slots: ComputedRef<InputGroupSlots>
}

/** Provided by `InputGroupRoot`, consumed by every compound part. */
export const INPUT_GROUP_CONTEXT: InjectionKey<InputGroupContext> = Symbol('heroui-vue-input-group')
