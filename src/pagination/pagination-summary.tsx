import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationSummary — the informational text block (e.g. "Showing 1–10 of 240").
 * Faithful Vue port of HeroUI v3 `Pagination.Summary` (`pagination__summary`).
 *
 * A plain `<div>` — no reka-ui primitive required.
 */
export const PaginationSummary = defineComponent({
  name: 'PaginationSummary',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="pagination-summary"
        class={cn((ctx?.slots.value ?? paginationVariants()).summary(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default PaginationSummary
