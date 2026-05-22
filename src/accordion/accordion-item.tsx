import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { AccordionItem as RekaAccordionItem } from 'reka-ui'
import { accordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_CONTEXT } from './accordion-context'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionItem — Vue port of HeroUI v3 `AccordionItem` (wraps Disclosure).
 *
 * Re-uses the root `accordionVariants` slot map from context (consistent with
 * how HeroUI React shares slots across the tree) and provides it downward.
 * Renders `data-slot="accordion-item"` on the reka-ui AccordionItem.
 */
export const AccordionItem = defineComponent({
  name: 'AccordionItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Unique value identifying this item within the accordion. */
    value: { type: String, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const rootCtx = inject(ACCORDION_CONTEXT, null)
    // Fall back to a fresh accordionVariants() if no root context (standalone use)
    const styles = computed(() => rootCtx?.slots.value ?? accordionVariants())
    const hideSeparator = computed(() => rootCtx?.hideSeparator.value ?? false)

    provide(ACCORDION_ITEM_CONTEXT, { slots: styles })

    return () => (
      <RekaAccordionItem
        {...(attrs as Record<string, any>)}
        value={props.value as string}
        data-slot="accordion-item"
        data-hide-separator={hideSeparator.value ? 'true' : undefined}
        class={cn(styles.value.item(), props.class)}
      >
        {slots.default?.()}
      </RekaAccordionItem>
    )
  }
})

export default AccordionItem
