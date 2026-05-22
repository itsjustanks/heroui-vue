import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { paginationVariants, type PaginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationRoot — the navigation container. Faithful Vue port of HeroUI v3 `Pagination`.
 *
 * Purely presentational — HeroUI's `Pagination` owns no page-math; callers
 * compose `Pagination.Content` / `Pagination.Item` / `Pagination.Link` etc.
 * themselves. Renders a `<nav role="navigation">` and provides the
 * `paginationVariants` slot map to descendant parts.
 */
export const PaginationRoot = defineComponent({
  name: 'Pagination',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Size step shared with all descendant parts. */
    size:  { type: String as PropType<PaginationVariants['size']>, default: undefined },
    as:    { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'nav' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => paginationVariants({ size: props.size }))
    provide(PAGINATION_CONTEXT, { slots: styles })

    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        aria-label="pagination"
        data-slot="pagination"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default PaginationRoot
