import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { AccordionRoot as RekaAccordionRoot } from 'reka-ui'
import { disclosureGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_CONTEXT } from './accordion-context'

/**
 * AccordionRoot — Vue port of HeroUI v3 `DisclosureGroup`.
 *
 * Computes `disclosureGroupVariants` and provides the slot map to child items.
 * Renders `data-slot="disclosure-group"` on the reka-ui AccordionRoot.
 */
export const AccordionRoot = defineComponent({
  name: 'Accordion',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => disclosureGroupVariants({}))
    provide(ACCORDION_CONTEXT, { slots: styles })

    return () => (
      <RekaAccordionRoot
        {...attrs}
        data-slot="disclosure-group"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaAccordionRoot>
    )
  }
})

export default AccordionRoot
