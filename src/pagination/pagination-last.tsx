import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationLast as RekaPaginationLast } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { IconChevronsRight } from '@/icons'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationLast — the "jump to last page" nav control (reka-ui extension).
 *
 * Not part of HeroUI v3's named compound API but available as a flat export.
 * reka-ui `PaginationLast` auto-disables on the last page.
 */
export const PaginationLast = defineComponent({
  name: 'PaginationLast',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <RekaPaginationLast
        {...attrs}
        data-slot="pagination-last"
        class={cn((ctx?.slots.value ?? paginationVariants()).link(), props.class)}
      >
        {slots.default ? slots.default() : <IconChevronsRight aria-hidden="true" data-slot="pagination-last-icon" />}
      </RekaPaginationLast>
    )
  }
})

export default PaginationLast
