import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AccordionHeader } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionHeading — Vue port of HeroUI v3 `DisclosureHeading`.
 *
 * Standalone heading wrapper (`h3` by default via reka-ui `AccordionHeader`)
 * when used outside of `AccordionTrigger`. Renders `data-slot="disclosure-heading"`.
 */
export const AccordionHeading = defineComponent({
  name: 'AccordionHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ACCORDION_ITEM_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()

      return (
        <AccordionHeader
          {...attrs}
          data-slot="disclosure-heading"
          class={cn(s.heading(), props.class)}
        >
          {slots.default?.()}
        </AccordionHeader>
      )
    }
  }
})

export default AccordionHeading
