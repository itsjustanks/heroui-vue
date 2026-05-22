import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationLink — a page-navigation button / anchor.
 * Faithful Vue port of HeroUI v3 `Pagination.Link` (`pagination__link`).
 *
 * `isActive` marks the current page (sets `aria-current="page"` and
 * `data-active="true"`). `as` / `asChild` allow router-link integration.
 */
export const PaginationLink = defineComponent({
  name: 'PaginationLink',
  inheritAttrs: false,
  props: {
    class:    { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Marks this link as the current page. */
    isActive: { type: Boolean, default: false },
    as:       { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild:  { type: Boolean as PropType<PrimitiveProps['asChild']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        aria-current={props.isActive ? 'page' : undefined}
        data-active={props.isActive ? 'true' : undefined}
        data-slot="pagination-link"
        class={cn((ctx?.slots.value ?? paginationVariants()).link(), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default PaginationLink
