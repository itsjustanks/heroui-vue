import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationFirst as RekaPaginationFirst } from 'reka-ui'
import { IconChevronsLeft } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * PaginationFirst — the "jump to first page" control.
 *
 * Wraps reka-ui `PaginationFirst` (auto-disables on the first page). Renders a
 * default double-chevron-left icon when no child is given; size from context.
 */
export const PaginationFirst = defineComponent({
  name: 'PaginationFirst',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaPaginationFirst
        {...attrs}
        data-slot="pagination-first"
        class={cn('pagination__link', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronsLeft data-slot="pagination-first-icon" />}
      </RekaPaginationFirst>
    )
  }
})

export default PaginationFirst
