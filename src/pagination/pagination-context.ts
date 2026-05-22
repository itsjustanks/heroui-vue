import type { ComputedRef, InjectionKey } from 'vue'
import type { paginationVariants } from '@heroui/styles'

/** The `paginationVariants()` slot map — one class-name function per Pagination part. */
export type PaginationSlots = ReturnType<typeof paginationVariants>

export interface PaginationContext {
  /** Reactive slot map — recomputed when the root `size` changes. */
  slots: ComputedRef<PaginationSlots>
}

/** Provided by `PaginationRoot`, consumed by every compound part. */
export const PAGINATION_CONTEXT: InjectionKey<PaginationContext> = Symbol('heroui-vue-pagination')
