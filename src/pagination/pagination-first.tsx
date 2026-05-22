import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationFirst as RekaPaginationFirst } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { IconChevronsLeft } from '@/icons'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationFirst — the "jump to first page" nav control (reka-ui extension).
 *
 * Not part of HeroUI v3's named compound API but available as a flat export.
 * reka-ui `PaginationFirst` auto-disables on the first page.
 */
export const PaginationFirst = defineComponent({
  name: 'PaginationFirst',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => (
      <RekaPaginationFirst
        {...attrs}
        data-slot="pagination-first"
        class={cn((ctx?.slots.value ?? paginationVariants()).link(), props.class)}
      >
        {slots.default ? slots.default() : <IconChevronsLeft aria-hidden="true" data-slot="pagination-first-icon" />}
      </RekaPaginationFirst>
    )
  }
})

export default PaginationFirst
