import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationListItem as RekaPaginationListItem } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationItem — a single `<li>` page-number slot.
 * Faithful Vue port of HeroUI v3 `Pagination.Item` (`pagination__item`).
 *
 * reka-ui `PaginationListItem` handles `data-selected` for the active page and
 * dispatches the page-change event.
 */
export const PaginationItem = defineComponent({
  name: 'PaginationItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The page number this item represents. */
    value: { type: Number, required: true }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <RekaPaginationListItem
        {...attrs}
        value={props.value}
        data-slot="pagination-item"
        class={cn((ctx?.slots.value ?? paginationVariants()).item(), props.class)}
      >
        {slots.default ? slots.default() : props.value}
      </RekaPaginationListItem>
    )
  }
})

export default PaginationItem
