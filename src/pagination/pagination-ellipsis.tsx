import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationEllipsis as RekaPaginationEllipsis } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationEllipsis — the truncation-gap glyph (`…`) between page ranges.
 * Faithful Vue port of HeroUI v3 `Pagination.Ellipsis` (`pagination__ellipsis`).
 *
 * reka-ui `PaginationEllipsis` renders the correct ARIA markup.
 */
export const PaginationEllipsis = defineComponent({
  name: 'PaginationEllipsis',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <RekaPaginationEllipsis
        {...attrs}
        aria-hidden="true"
        data-slot="pagination-ellipsis"
        class={cn((ctx?.slots.value ?? paginationVariants()).ellipsis(), props.class)}
      >
        {slots.default ? slots.default() : '…'}
      </RekaPaginationEllipsis>
    )
  }
})

export default PaginationEllipsis
