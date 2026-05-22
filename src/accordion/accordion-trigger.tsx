import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionHeader, AccordionTrigger as RekaAccordionTrigger, injectAccordionItemContext } from 'reka-ui'
import { IconChevronDown } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * AccordionTrigger — the header button that expands/collapses an item.
 *
 * HeroUI BEM: `accordion__heading` wrapper, `accordion__trigger` button,
 * `accordion__indicator` chevron. `data-slot="accordion-trigger"` is required
 * by the surface-variant CSS for first/last border-radius rounding.
 * `data-expanded` on the indicator is driven reactively via reka-ui's
 * `injectAccordionItemContext().open`.
 */
export const AccordionTrigger = defineComponent({
  name: 'AccordionTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const itemContext = injectAccordionItemContext()

    return () => (
      <AccordionHeader class="accordion__heading">
        <RekaAccordionTrigger
          {...attrs}
          data-slot="accordion-trigger"
          class={cn('accordion__trigger', props.class)}
        >
          {slots.default?.()}
          {slots.icon
            ? slots.icon()
            : (
              <IconChevronDown
                class="accordion__indicator"
                data-expanded={itemContext.open.value ? 'true' : undefined}
              />
            )}
        </RekaAccordionTrigger>
      </AccordionHeader>
    )
  }
})

export default AccordionTrigger
