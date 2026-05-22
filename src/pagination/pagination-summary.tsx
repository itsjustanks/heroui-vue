import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { usePaginationContext } from './pagination-context'

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
    const context = usePaginationContext()

    return () => (
      <div
        {...attrs}
        data-slot="pagination-summary"
        class={cn(
          'flex items-center gap-2 self-start text-muted-foreground sm:self-center',
          context?.size.value === 'sm' && 'text-xs',
          context?.size.value === 'md' && 'text-sm',
          context?.size.value === 'lg' && 'text-base',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default PaginationSummary
