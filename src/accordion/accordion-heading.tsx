import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AccordionHeader } from 'reka-ui'
import { accordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionHeading — Vue port of HeroUI v3 `AccordionHeading`.
 *
 * Standalone heading wrapper (`h3` via reka-ui `AccordionHeader`).
 * Renders `data-slot="accordion-heading"`.
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
      const s = ctx?.slots.value ?? accordionVariants()

      return (
        <AccordionHeader
          {...attrs}
          data-slot="accordion-heading"
          class={cn(s.heading(), props.class)}
        >
          {slots.default?.()}
        </AccordionHeader>
      )
    }
  }
})

export default AccordionHeading
