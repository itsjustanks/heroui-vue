import type { ComputedRef, InjectionKey } from 'vue'
import type { disclosureVariants } from '@heroui/styles'

/** The `disclosureVariants()` slot map for a single Disclosure item. */
export type AccordionItemSlots = ReturnType<typeof disclosureVariants>

export interface AccordionItemContext {
  /** Reactive slot map — recomputed when item variant props change. */
  slots: ComputedRef<AccordionItemSlots>
}

/** Provided by `Accordion.Item`, consumed by `Heading`, `Trigger`, `Content`, etc. */
export const ACCORDION_ITEM_CONTEXT: InjectionKey<AccordionItemContext> = Symbol('heroui-vue-accordion-item')
