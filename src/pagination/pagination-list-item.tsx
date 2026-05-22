import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationItem — a single `<li>` page slot.
 * Faithful Vue port of HeroUI v3 `Pagination.Item` (`pagination__item`).
 */
export const PaginationItem = defineComponent({
  name: 'PaginationItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <li
        {...attrs}
        data-slot="pagination-item"
        class={cn((ctx?.slots.value ?? paginationVariants()).item(), props.class)}
      >
        {slots.default?.()}
      </li>
    )
  }
})

export default PaginationItem
