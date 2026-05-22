import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationListItem as RekaPaginationListItem } from 'reka-ui'
import { cn } from '@/lib/utils'
import { usePaginationContext } from './pagination-context'
import { paginationLinkVariants } from './pagination-variants'

/**
 * PaginationListItem — a single page-number button.
 *
 * Wraps reka-ui `PaginationListItem` (handles `data-selected` for the active
 * page and dispatches the page change). Styled with the shared link variant;
 * size is inherited from `PaginationRoot` via context.
 */
export const PaginationListItem = defineComponent({
  name: 'PaginationListItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The page number this item represents. */
    value: { type: Number, required: true }
  },
  setup (props, { attrs, slots }) {
    const context = usePaginationContext()

    return () => (
      <RekaPaginationListItem
        {...attrs}
        value={props.value}
        data-slot="pagination-item"
        class={cn(
          paginationLinkVariants({ size: context?.size.value }),
          props.class
        )}
      >
        {slots.default ? slots.default() : props.value}
      </RekaPaginationListItem>
    )
  }
})

export default PaginationListItem
