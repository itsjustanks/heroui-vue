import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationContent — the `<ul>` container holding page items.
 * Faithful Vue port of HeroUI v3 `Pagination.Content` (`pagination__content`).
 */
export const PaginationContent = defineComponent({
  name: 'PaginationContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <ul
        {...attrs}
        data-slot="pagination-content"
        class={cn((ctx?.slots.value ?? paginationVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </ul>
    )
  }
})

export default PaginationContent
