import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COLLAPSIBLE_CONTEXT } from './collapsible-context'

/**
 * CollapsibleHeading — Vue port of HeroUI v3 `DisclosureHeading`.
 *
 * Renders an `h3[data-slot="disclosure-heading"]`. Wraps the trigger button.
 */
export const CollapsibleHeading = defineComponent({
  name: 'CollapsibleHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLLAPSIBLE_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()

      return (
        <h3
          {...attrs}
          data-slot="disclosure-heading"
          class={cn(s.heading(), props.class)}
        >
          {slots.default?.()}
        </h3>
      )
    }
  }
})

export default CollapsibleHeading
