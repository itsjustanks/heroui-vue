import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationLast as RekaPaginationLast } from 'reka-ui'
import { ChevronsRight as IconChevronsRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * PaginationLast — the "jump to last page" control.
 *
 * Wraps reka-ui `PaginationLast` (auto-disables on the last page). Renders a
 * default double-chevron-right icon when no child is given; size from context.
 */
export const PaginationLast = defineComponent({
  name: 'PaginationLast',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaPaginationLast
        {...attrs}
        data-slot="pagination-last"
        class={cn('pagination__link', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronsRight data-slot="pagination-last-icon" />}
      </RekaPaginationLast>
    )
  }
})

export default PaginationLast
