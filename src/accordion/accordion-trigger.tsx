import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AccordionHeader, AccordionTrigger as RekaAccordionTrigger, injectAccordionItemContext } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { IconChevronDown } from '@/icons'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionTrigger — Vue port of HeroUI v3 `DisclosureHeading` + `DisclosureTrigger` + `DisclosureIndicator`.
 *
 * DOM structure mirrors HeroUI React:
 *   h3[data-slot="disclosure-heading"]
 *     button[data-slot="disclosure-trigger"]
 *       {children}
 *       svg[data-slot="disclosure-indicator"][data-expanded]
 */
export const AccordionTrigger = defineComponent({
  name: 'AccordionTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ACCORDION_ITEM_CONTEXT, null)
    const itemContext = injectAccordionItemContext()

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()

      return (
        <AccordionHeader
          data-slot="disclosure-heading"
          class={cn(s.heading())}
        >
          <RekaAccordionTrigger
            {...attrs}
            data-slot="disclosure-trigger"
            class={cn(s.trigger(), props.class)}
          >
            {slots.default?.()}
            {slots.indicator
              ? slots.indicator()
              : (
                <IconChevronDown
                  data-slot="disclosure-indicator"
                  class={cn(s.indicator())}
                  data-expanded={itemContext.open.value ? 'true' : undefined}
                />
              )}
          </RekaAccordionTrigger>
        </AccordionHeader>
      )
    }
  }
})

export default AccordionTrigger
