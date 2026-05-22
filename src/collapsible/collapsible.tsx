import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { CollapsibleRoot as RekaCollapsibleRoot } from 'reka-ui'
import { disclosureVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COLLAPSIBLE_CONTEXT } from './collapsible-context'

/**
 * CollapsibleRoot — Vue port of HeroUI v3 `DisclosureRoot`.
 *
 * Computes `disclosureVariants` and provides the slot map to child parts.
 * Renders `data-slot="disclosure"` on the reka-ui CollapsibleRoot.
 */
export const CollapsibleRoot = defineComponent({
  name: 'Collapsible',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => disclosureVariants({}))
    provide(COLLAPSIBLE_CONTEXT, { slots: styles })

    return () => (
      <RekaCollapsibleRoot
        {...attrs}
        data-slot="disclosure"
        class={cn(styles.value.base(), props.class)}
      >
        {{
          default: ({ open }: { open: boolean }) => slots.default?.({ open })
        }}
      </RekaCollapsibleRoot>
    )
  }
})

export default CollapsibleRoot
