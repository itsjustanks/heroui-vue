import type { ComputedRef, InjectionKey } from 'vue'
import type { tableVariants } from '@heroui/styles'

/** The `tableVariants()` slot map — one class-name function per Table part. */
export type TableSlots = ReturnType<typeof tableVariants>

export interface TableContext {
  /** Reactive slot map — recomputed when `variant` changes. */
  slots: ComputedRef<TableSlots>
}

/** Provided by `TableRoot`, consumed by every compound part. */
export const TABLE_CONTEXT: InjectionKey<TableContext> = Symbol('heroui-vue-table')
