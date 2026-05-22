import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionItem as AccordionItemBase } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaAccordionItem: any = AccordionItemBase
import { cn } from '@/lib/utils'

/**
 * AccordionItem — a single collapsible section.
 *
 * HeroUI BEM: `accordion__item`. The CSS renders a bottom separator via `::after`.
 */
export const AccordionItem = defineComponent({
  name: 'AccordionItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAccordionItem
        {...(attrs as Record<string, any>)}
        class={cn('accordion__item', props.class)}
      >
        {slots.default?.()}
      </RekaAccordionItem>
    )
  }
})

export default AccordionItem
