import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { selectVariants } from '@heroui/styles'

/** The `selectVariants()` slot map — one class-name function per Select part. */
export type SelectSlots = ReturnType<typeof selectVariants>

export interface SelectContext {
  /** Reactive slot map — recomputed when root variant/fullWidth changes. */
  slots: ComputedRef<SelectSlots>
  /** Root-level placeholder mirrored into Select.Value when omitted there. */
  placeholder: Ref<string | undefined>
}

/** Provided by `SelectRoot`, consumed by every compound part. */
export const SELECT_CONTEXT: InjectionKey<SelectContext> = Symbol('heroui-vue-select')
