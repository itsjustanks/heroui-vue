import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CollapsibleContent as RekaCollapsibleContent } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COLLAPSIBLE_CONTEXT } from './collapsible-context'

/**
 * CollapsibleContent — Vue port of HeroUI v3 `DisclosureContent`.
 *
 * DOM structure mirrors HeroUI React:
 *   div[data-slot="disclosure-content"]   ← height-animated panel
 *
 * The body/body-inner structure lives in `CollapsibleBody` for parity with
 * HeroUI's separate `DisclosureBody` part. Use `CollapsibleBody` as a child
 * of this component for the full padded layout.
 */
export const CollapsibleContent = defineComponent({
  name: 'CollapsibleContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLLAPSIBLE_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()

      return (
        <RekaCollapsibleContent
          {...attrs}
          data-slot="disclosure-content"
          class={cn(s.content(), props.class)}
        >
          {slots.default?.()}
        </RekaCollapsibleContent>
      )
    }
  }
})

export default CollapsibleContent
