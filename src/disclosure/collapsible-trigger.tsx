import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { CollapsibleTrigger as RekaCollapsibleTrigger } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COLLAPSIBLE_CONTEXT } from './collapsible-context'

/**
 * CollapsibleTrigger — Vue port of HeroUI v3 `DisclosureTrigger`.
 *
 * Renders `data-slot="disclosure-trigger"` on the reka-ui CollapsibleTrigger button.
 */
export const CollapsibleTrigger = defineComponent({
  name: 'CollapsibleTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLLAPSIBLE_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()

      return (
        <RekaCollapsibleTrigger
          {...attrs}
          data-slot="disclosure-trigger"
          class={cn(s.trigger(), props.class)}
        >
          {slots.default?.()}
        </RekaCollapsibleTrigger>
      )
    }
  }
})

export default CollapsibleTrigger
