import type { ComputedRef, InjectionKey } from 'vue'
import type { listboxVariants } from '@heroui/styles'

/** The `listboxVariants()` result (a plain class string — no slots). */
export type ListBoxStyles = ReturnType<typeof listboxVariants>

export interface ListBoxContext {
  /** Reactive base class string — recomputed when `variant` changes. */
  styles: ComputedRef<ListBoxStyles>
}

/** Provided by `ListBoxRoot`, consumed by compound parts when needed. */
export const LIST_BOX_CONTEXT: InjectionKey<ListBoxContext> = Symbol('heroui-vue-list-box')
