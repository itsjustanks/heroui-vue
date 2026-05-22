import type { ComputedRef, InjectionKey } from 'vue'
import type { accordionVariants } from '@heroui/styles'

/** The `accordionVariants()` slot map. */
export type AccordionSlots = ReturnType<typeof accordionVariants>

export interface AccordionContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<AccordionSlots>
  /** Hide separator between items. */
  hideSeparator: ComputedRef<boolean>
}

/** Provided by `Accordion`, consumed by compound parts. */
export const ACCORDION_CONTEXT: InjectionKey<AccordionContext> = Symbol('heroui-vue-accordion')
