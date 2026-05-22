import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { accordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionBody — Vue port of HeroUI v3 `DisclosureBody`.
 *
 * Renders the outer clip container + inner padded wrapper:
 *   div[data-slot="accordion-body"]
 *     div[data-slot="accordion-body-inner"]
 *       {children}
 *
 * Use inside `AccordionContent` when you need manual control over the body
 * structure. `AccordionContent` already embeds this structure automatically.
 */
export const AccordionBody = defineComponent({
  name: 'AccordionBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ACCORDION_ITEM_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? accordionVariants()

      return (
        <div {...attrs} data-slot="accordion-body" class={cn(s.body())}>
          <div data-slot="accordion-body-inner" class={cn(s.bodyInner(), props.class)}>
            {slots.default?.()}
          </div>
        </div>
      )
    }
  }
})

export default AccordionBody
