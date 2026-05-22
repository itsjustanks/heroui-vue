import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationNext as RekaPaginationNext } from 'reka-ui'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * PaginationNext — the "go to next page" control.
 *
 * Wraps reka-ui `PaginationNext` (auto-disables on the last page). Renders a
 * default chevron-right icon when no child is given; size from context.
 */
export const PaginationNext = defineComponent({
  name: 'PaginationNext',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaPaginationNext
        {...attrs}
        data-slot="pagination-next"
        class={cn('pagination__link pagination__link--nav', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronRight data-slot="pagination-next-icon" />}
      </RekaPaginationNext>
    )
  }
})

export default PaginationNext
