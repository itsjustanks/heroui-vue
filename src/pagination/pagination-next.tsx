import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationNext as RekaPaginationNext } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationNext — the "go to next page" nav control.
 * Faithful Vue port of HeroUI v3 `Pagination.Next` (`pagination__link--nav`).
 *
 * reka-ui `PaginationNext` auto-disables on the last page. Renders a default
 * chevron-right icon (`PaginationNextIcon`) when no child is given.
 */
export const PaginationNext = defineComponent({
  name: 'PaginationNext',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => {
      const baseLink = (ctx?.slots.value ?? paginationVariants()).link()
      return (
        <RekaPaginationNext
          {...attrs}
          data-slot="pagination-next"
          class={cn(baseLink, 'pagination__link--nav', props.class)}
        >
          {slots.default
            ? slots.default()
            : <IconChevronRight aria-hidden="true" data-slot="pagination-next-icon" />}
        </RekaPaginationNext>
      )
    }
  }
})

export default PaginationNext
