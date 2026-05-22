import type { ComputedRef, InjectionKey } from 'vue'
import type { disclosureGroupVariants } from '@heroui/styles'

/** The `disclosureGroupVariants()` slot map. */
export type AccordionSlots = ReturnType<typeof disclosureGroupVariants>

export interface AccordionContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<AccordionSlots>
}

/** Provided by `Accordion`, consumed by compound parts. */
export const ACCORDION_CONTEXT: InjectionKey<AccordionContext> = Symbol('heroui-vue-accordion')
