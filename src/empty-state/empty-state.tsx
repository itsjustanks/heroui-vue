import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { emptyStateVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * EmptyStateRoot — simple fallback surface for empty result sets.
 * Faithful Vue port of HeroUI v3 `EmptyStateRoot`.
 */
export const EmptyStateRoot = defineComponent({
  name: 'EmptyState',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        data-slot="empty-state"
        as={props.as}
        as-child={props.asChild}
        class={cn(emptyStateVariants(), props.class)}
      >
        {slots.default?.() ?? 'No results found'}
      </Primitive>
    )
  }
})

export default EmptyStateRoot
