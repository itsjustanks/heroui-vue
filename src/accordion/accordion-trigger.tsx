import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionHeader, AccordionTrigger as RekaAccordionTrigger } from 'reka-ui'
import { ChevronDown as IconChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * AccordionTrigger — the header button that expands/collapses an item.
 *
 * HeroUI `accordion__trigger` + `accordion__indicator`: a flex header with a
 * trailing chevron that rotates 180deg when open (reka-ui `data-[state=open]`).
 * Tokens adapted to the repo. An `icon` slot overrides the default chevron.
 */
export const AccordionTrigger = defineComponent({
  name: 'AccordionTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <AccordionHeader class="flex">
        <RekaAccordionTrigger
          {...attrs}
          class={cn(
            'flex flex-1 items-center justify-between py-4 text-sm font-medium text-foreground outline-none transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
            props.class
          )}
        >
          {slots.default?.()}
          {slots.icon
            ? slots.icon()
            : (
              <IconChevronDown class="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            )}
        </RekaAccordionTrigger>
      </AccordionHeader>
    )
  }
})

export default AccordionTrigger
