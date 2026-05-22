import type { ComputedRef, InjectionKey } from 'vue'
import type { disclosureVariants } from '@heroui/styles'

/** The `disclosureVariants()` slot map — one class-name function per Disclosure part. */
export type CollapsibleSlots = ReturnType<typeof disclosureVariants>

export interface CollapsibleContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<CollapsibleSlots>
}

/** Provided by `Collapsible`, consumed by every compound part. */
export const COLLAPSIBLE_CONTEXT: InjectionKey<CollapsibleContext> = Symbol('heroui-vue-collapsible')
