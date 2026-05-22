import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COLLAPSIBLE_CONTEXT } from './collapsible-context'

/**
 * CollapsibleBody — Vue port of HeroUI v3 `DisclosureBody`.
 *
 * Renders the outer clip container + inner padded wrapper:
 *   div[data-slot="disclosure-body"]
 *     div[data-slot="disclosure-body-inner"]
 *       {children}
 *
 * Nest inside `CollapsibleContent` to get HeroUI's smooth height animation.
 */
export const CollapsibleBody = defineComponent({
  name: 'CollapsibleBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLLAPSIBLE_CONTEXT, null)

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()

      return (
        <div {...attrs} data-slot="disclosure-body" class={cn(s.body())}>
          <div data-slot="disclosure-body-inner" class={cn(s.bodyInner(), props.class)}>
            {slots.default?.()}
          </div>
        </div>
      )
    }
  }
})

export default CollapsibleBody
