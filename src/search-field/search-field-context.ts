import type { ComputedRef, InjectionKey, WritableComputedRef } from 'vue'
import type { searchFieldVariants } from '@heroui/styles'

/** The `searchFieldVariants()` slot map — one class-name function per part. */
export type SearchFieldSlots = ReturnType<typeof searchFieldVariants>

export interface SearchFieldContext {
  /** Reactive slot map — recomputed when variant / fullWidth change. */
  slots: ComputedRef<SearchFieldSlots>
  /** The current query string (read + write). */
  value: WritableComputedRef<string>
  /** Empty the field and keep focus, the way React-Aria's SearchField does. */
  clear: () => void
}

/** Provided by `SearchFieldRoot`, consumed by every compound part. */
export const SEARCH_FIELD_CONTEXT: InjectionKey<SearchFieldContext> = Symbol('heroui-vue-search-field')
