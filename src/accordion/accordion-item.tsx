import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { AccordionItem as RekaAccordionItem } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionItem — Vue port of HeroUI v3 `Disclosure`.
 *
 * Computes `disclosureVariants` and provides the item-level slot map to
 * `AccordionHeading`, `AccordionTrigger`, `AccordionContent`, etc.
 * Renders `data-slot="disclosure"` on the reka-ui AccordionItem.
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
    const styles = computed(() => disclosureVariants({}))
    provide(ACCORDION_ITEM_CONTEXT, { slots: styles })

    return () => (
      <RekaAccordionItem
        {...(attrs as Record<string, any>)}
        value={props.value as string}
        data-slot="disclosure"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaAccordionItem>
    )
  }
})

export default AccordionItem
