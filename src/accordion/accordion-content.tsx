import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionContent as RekaAccordionContent, injectAccordionItemContext } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * AccordionContent — the collapsible panel body.
 *
 * HeroUI BEM: `accordion__panel` on the reka content element (height transition),
 * `accordion__body` + `accordion__body-inner` on the inner divs.
 *
 * HeroUI CSS uses:
 *   - `--disclosure-panel-height` — bridged from reka-ui's `--reka-accordion-content-height`
 *   - `[data-expanded="true"]` — wired reactively via `injectAccordionItemContext().open`
 */
export const AccordionContent = defineComponent({
  name: 'AccordionContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const itemContext = injectAccordionItemContext()

    return () => (
      <RekaAccordionContent
        {...attrs}
        class="accordion__panel"
        data-expanded={itemContext.open.value ? 'true' : undefined}
        style="--disclosure-panel-height: var(--reka-accordion-content-height)"
      >
        <div class="accordion__body">
          <div class={cn('accordion__body-inner', props.class)}>{slots.default?.()}</div>
        </div>
      </RekaAccordionContent>
    )
  }
})

export default AccordionContent
