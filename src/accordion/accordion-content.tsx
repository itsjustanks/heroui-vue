import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionContent as RekaAccordionContent } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AccordionContent — the collapsible panel body.
 *
 * HeroUI `accordion__panel` + `accordion__body`: a height-animated region. The
 * open/close height transition relies on reka-ui's
 * `--reka-accordion-content-height` CSS var, driven by the
 * `accordion-down` / `accordion-up` keyframes (tailwind.config.ts). The exact
 * `data-[state]:animate-accordion-*` classes are kept so behaviour is identical.
 */
export const AccordionContent = defineComponent({
  name: 'AccordionContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAccordionContent
        {...attrs}
        class="overflow-hidden text-sm text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div class={cn('pb-4 pt-0', props.class)}>{slots.default?.()}</div>
      </RekaAccordionContent>
    )
  }
})

export default AccordionContent
