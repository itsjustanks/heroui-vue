import { defineComponent } from 'vue'
import { CollapsibleTrigger as RekaCollapsibleTrigger } from 'reka-ui'

/**
 * CollapsibleTrigger — toggles the collapsible open/closed.
 *
 * HeroUI `disclosure__trigger`. Thin wrapper over reka-ui `CollapsibleTrigger` —
 * forwards all props/attrs. Pass `as-child` to render a custom element as the
 * trigger itself rather than the default `<button>`.
 */
export const CollapsibleTrigger = defineComponent({
  name: 'CollapsibleTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => (
      <RekaCollapsibleTrigger {...attrs}>{slots.default?.()}</RekaCollapsibleTrigger>
    )
  }
})

export default CollapsibleTrigger
