import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * PaginationSummary — left-side info text (e.g. "Showing 1–10 of 240").
 *
 * Faithful port of HeroUI v3 `PaginationSummary` (`pagination__summary`): a
 * muted, sized informational block. A plain `<div>` — no reka primitive needed.
 */
export const PaginationSummary = defineComponent({
  name: 'PaginationSummary',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="pagination-summary"
        class={cn('pagination__summary', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default PaginationSummary
