import { defineComponent } from 'vue'
import { CollapsibleRoot } from 'reka-ui'

/**
 * Collapsible — root of the HeroUI-Vue collapsible (primitive library).
 *
 * HeroUI `disclosure` root. Thin wrapper over reka-ui `CollapsibleRoot` — logic
 * only, renders no DOM. Forwards all props/emits (`open`, `defaultOpen`,
 * `onUpdate:open`, `disabled`, …). The default slot receives the `open` scope
 * value from reka-ui so call sites can render against the open state.
 */
export const Collapsible = defineComponent({
  name: 'Collapsible',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => (
      <CollapsibleRoot {...attrs}>
        {{
          default: ({ open }: { open: boolean }) => slots.default?.({ open })
        }}
      </CollapsibleRoot>
    )
  }
})

export default Collapsible
