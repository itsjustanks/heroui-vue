import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AccordionContent as RekaAccordionContent, injectAccordionItemContext } from 'reka-ui'
import { accordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionPanel — Vue port of HeroUI v3 `AccordionPanel`.
 *
 * DOM structure mirrors HeroUI React:
 *   div[data-slot="accordion-panel"][data-expanded]   ← height-animated panel
 *     {children (usually AccordionBody)}
 *
 * Also exported as `AccordionContent` for backward compatibility.
 */
export const AccordionPanel = defineComponent({
  name: 'AccordionPanel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ACCORDION_ITEM_CONTEXT, null)
    const itemContext = injectAccordionItemContext()

    return () => {
      const s = ctx?.slots.value ?? accordionVariants()

      return (
        <RekaAccordionContent
          {...attrs}
          forceMount
          data-slot="accordion-panel"
          class={cn(s.panel(), props.class)}
          data-expanded={itemContext.open.value ? 'true' : undefined}
        >
          {slots.default?.()}
        </RekaAccordionContent>
      )
    }
  }
})

/** @deprecated Use `AccordionPanel` — kept for backward compatibility. */
export const AccordionContent = AccordionPanel

export default AccordionPanel
