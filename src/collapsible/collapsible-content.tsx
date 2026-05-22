import { defineComponent } from 'vue'
import { CollapsibleContent as RekaCollapsibleContent } from 'reka-ui'

/**
 * CollapsibleContent — the collapsible panel body.
 *
 * HeroUI `disclosure__content`: a height-animated region. The open/close height
 * transition relies on reka-ui's `--reka-collapsible-content-height` CSS var,
 * driven by the `collapsible-down` / `collapsible-up` keyframes. The exact
 * `data-[state]:animate-collapsible-*` classes are kept verbatim from the
 * shadcn-vue source so behaviour is identical.
 */
export const CollapsibleContent = defineComponent({
  name: 'CollapsibleContent',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => (
      <RekaCollapsibleContent
        {...attrs}
        class="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
      >
        {slots.default?.()}
      </RekaCollapsibleContent>
    )
  }
})

export default CollapsibleContent
