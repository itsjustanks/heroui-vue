import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationList as RekaPaginationList } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationContent — the `<ul>` container holding page items.
 * Faithful Vue port of HeroUI v3 `Pagination.Content` (`pagination__content`).
 *
 * reka-ui `PaginationList` exposes the computed `items` array via its default
 * scoped slot — forward it through so callers can use `v-slot="{ items }"`.
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
      <RekaPaginationList
        {...attrs}
        data-slot="pagination-content"
        class={cn((ctx?.slots.value ?? paginationVariants()).content(), props.class)}
      >
        {{ default: (scope: unknown) => slots.default?.(scope) }}
      </RekaPaginationList>
    )
  }
})

export default PaginationContent
