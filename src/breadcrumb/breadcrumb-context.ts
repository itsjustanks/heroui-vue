import type { ComputedRef, InjectionKey } from 'vue'
import type { breadcrumbsVariants } from '@heroui/styles'

/** The `breadcrumbsVariants()` slot map — one class-name function per Breadcrumbs part. */
export type BreadcrumbsSlots = ReturnType<typeof breadcrumbsVariants>

export interface BreadcrumbsContext {
  /** Reactive slot map — recomputed if variant props ever change. */
  slots: ComputedRef<BreadcrumbsSlots>
}

/** Provided by `Breadcrumbs`, consumed by `BreadcrumbsItem`. */
export const BREADCRUMBS_CONTEXT: InjectionKey<BreadcrumbsContext> = Symbol('heroui-vue-breadcrumbs')
