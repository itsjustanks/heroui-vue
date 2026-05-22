import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { AccordionRoot as RekaAccordionRoot } from 'reka-ui'
import { accordionVariants, type AccordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_CONTEXT } from './accordion-context'

/**
 * AccordionRoot — Vue port of HeroUI v3 `AccordionRoot` (wraps DisclosureGroup).
 *
 * Computes `accordionVariants` and provides the slot map to child items.
 * Renders `data-slot="accordion"` on the reka-ui AccordionRoot.
 */
export const AccordionRoot = defineComponent({
  name: 'Accordion',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. */
    variant: { type: String as PropType<AccordionVariants['variant']>, default: undefined },
    /** Hide separator between items. */
    hideSeparator: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => accordionVariants({ variant: props.variant }))
    provide(ACCORDION_CONTEXT, { slots: styles, hideSeparator: computed(() => props.hideSeparator) })

    return () => (
      <RekaAccordionRoot
        {...attrs}
        data-slot="accordion"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaAccordionRoot>
    )
  }
})

export default AccordionRoot
