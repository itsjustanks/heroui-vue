import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionItem as AccordionItemBase } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaAccordionItem: any = AccordionItemBase
import { cn } from '@/lib/utils'

/**
 * AccordionItem — a single collapsible section.
 *
 * HeroUI `accordion__item`: a bottom-separated row. Styling is adapted from
 * HeroUI's `accordion.css` — the BEM `::after` separator is expressed here as a
 * `border-b` using the repo's `border-border` token.
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
        class={cn('border-b border-border', props.class)}
      >
        {slots.default?.()}
      </RekaAccordionItem>
    )
  }
})

export default AccordionItem
