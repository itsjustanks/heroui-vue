import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { injectCollapsibleRootContext } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { IconChevronDown } from '@/icons'
import { COLLAPSIBLE_CONTEXT } from './collapsible-context'

/**
 * CollapsibleIndicator — Vue port of HeroUI v3 `DisclosureIndicator`.
 *
 * Renders `data-slot="disclosure-indicator"` with `data-expanded` wired to
 * the open state. Defaults to `IconChevronDown`; pass a child to override.
 */
export const CollapsibleIndicator = defineComponent({
  name: 'CollapsibleIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLLAPSIBLE_CONTEXT, null)
    const rootCtx = injectCollapsibleRootContext()

    return () => {
      const s = ctx?.slots.value ?? disclosureVariants()
      const expanded = rootCtx.open.value ? 'true' : undefined

      if (slots.default) {
        return (
          <span
            {...attrs}
            data-slot="disclosure-indicator"
            data-expanded={expanded}
            class={cn(s.indicator(), props.class)}
          >
            {slots.default()}
          </span>
        )
      }

      return (
        <IconChevronDown
          {...(attrs as Record<string, any>)}
          data-slot="disclosure-indicator"
          data-expanded={expanded}
          class={cn(s.indicator(), props.class)}
        />
      )
    }
  }
})

export default CollapsibleIndicator
