import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AccordionContent as RekaAccordionContent, injectAccordionItemContext } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionContent — Vue port of HeroUI v3 `DisclosureContent` + `DisclosureBody`.
 *
 * DOM structure mirrors HeroUI React:
 *   div[data-slot="disclosure-content"][data-expanded]   ← height-animated panel
 *     div[data-slot="disclosure-body"]                   ← overflow clip
 *       div[data-slot="disclosure-body-inner"]           ← padded content
 *         {children}
 */
export const AccordionContent = defineComponent({
  name: 'AccordionContent',
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
        <RekaAccordionContent
          {...attrs}
          data-slot="disclosure-content"
          class={cn(s.content())}
          data-expanded={itemContext.open.value ? 'true' : undefined}
          style="--disclosure-panel-height: var(--reka-accordion-content-height)"
        >
          <div data-slot="disclosure-body" class={cn(s.body())}>
            <div data-slot="disclosure-body-inner" class={cn(s.bodyInner(), props.class)}>
              {slots.default?.()}
            </div>
          </div>
        </RekaAccordionContent>
      )
    }
  }
})

export default AccordionContent
