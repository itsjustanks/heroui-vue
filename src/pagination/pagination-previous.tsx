import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationPrev as RekaPaginationPrev } from 'reka-ui'
import { ChevronLeft as IconChevronLeft } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { usePaginationContext } from './pagination-context'
import { paginationLinkVariants } from './pagination-variants'

/**
 * PaginationPrevious — the "go to previous page" control.
 *
 * Wraps reka-ui `PaginationPrev` (auto-disables on the first page). Renders a
 * default chevron-left icon when no child is given; size from context.
 */
export const PaginationPrevious = defineComponent({
  name: 'PaginationPrevious',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const context = usePaginationContext()

    return () => (
      <RekaPaginationPrev
        {...attrs}
        data-slot="pagination-previous"
        class={cn(
          paginationLinkVariants({ size: context?.size.value, nav: true }),
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconChevronLeft data-slot="pagination-previous-icon" />}
      </RekaPaginationPrev>
    )
  }
})

export default PaginationPrevious
