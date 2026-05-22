import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { AccordionTrigger as RekaAccordionTrigger } from 'reka-ui'
import { accordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionTrigger — Vue port of HeroUI v3 `AccordionTrigger`.
 *
 * Renders only the trigger button (`data-slot="accordion-trigger"`); the
 * surrounding `h3` heading is `Accordion.Heading`, exactly as HeroUI React
 * composes it:
 *
 *   h3[data-slot="accordion-heading"]   ← Accordion.Heading
 *     button[data-slot="accordion-trigger"]   ← Accordion.Trigger
 *       {children}
 *
 * The chevron is NOT auto-rendered — compose `<Accordion.Indicator>` inside the
 * trigger explicitly, the way HeroUI's docs do. `accordion__trigger` is a flex
 * row with `justify-between`, and `accordion__indicator` carries `ml-auto`, so
 * an explicit indicator lands flush against the trailing edge.
 */
export const AccordionTrigger = defineComponent({
  name: 'AccordionTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(ACCORDION_ITEM_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? accordionVariants()

      return (
        <RekaAccordionTrigger
          {...attrs}
          data-slot="accordion-trigger"
          class={cn(s.trigger(), props.class)}
        >
          {slots.default?.()}
        </RekaAccordionTrigger>
      )
    }
  }
})

export default AccordionTrigger
