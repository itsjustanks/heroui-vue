import type { ComputedRef, InjectionKey } from 'vue'
import type { accordionVariants } from '@heroui/styles'

/** The `accordionVariants()` slot map shared across all Accordion parts. */
export type AccordionItemSlots = ReturnType<typeof accordionVariants>

export interface AccordionItemContext {
  /** Reactive slot map from the root — shared with item-level parts. */
  slots: ComputedRef<AccordionItemSlots>
}

/** Provided by `Accordion.Item`, consumed by `Heading`, `Trigger`, `Panel`, etc. */
export const ACCORDION_ITEM_CONTEXT: InjectionKey<AccordionItemContext> = Symbol('heroui-vue-accordion-item')
