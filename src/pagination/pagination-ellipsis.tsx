import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationEllipsis as RekaPaginationEllipsis } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * PaginationEllipsis — the truncation-gap glyph (`…`) between page ranges.
 *
 * Wraps reka-ui `PaginationEllipsis`; size inherited from `PaginationRoot`.
 */
export const PaginationEllipsis = defineComponent({
  name: 'PaginationEllipsis',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaPaginationEllipsis
        {...attrs}
        data-slot="pagination-ellipsis"
        class={cn('pagination__ellipsis', props.class)}
      >
        {slots.default ? slots.default() : '…'}
      </RekaPaginationEllipsis>
    )
  }
})

export default PaginationEllipsis
