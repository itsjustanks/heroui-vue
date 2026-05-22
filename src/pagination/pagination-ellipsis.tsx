import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationEllipsis — the truncation-gap glyph (`…`) between page ranges.
 * Faithful Vue port of HeroUI v3 `Pagination.Ellipsis` (`pagination__ellipsis`).
 */
export const PaginationEllipsis = defineComponent({
  name: 'PaginationEllipsis',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="pagination-ellipsis"
        class={cn((ctx?.slots.value ?? paginationVariants()).ellipsis(), props.class)}
      >
        &hellip;
      </span>
    )
  }
})

export default PaginationEllipsis
