import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { PaginationPrev as RekaPaginationPrev } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { IconChevronLeft } from '@/icons'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationPrevious — the "go to previous page" nav control.
 * Faithful Vue port of HeroUI v3 `Pagination.Previous` (`pagination__link--nav`).
 *
 * reka-ui `PaginationPrev` auto-disables on the first page. Renders a default
 * chevron-left icon (`PaginationPreviousIcon`) when no child is given.
 */
export const PaginationPrevious = defineComponent({
  name: 'PaginationPrevious',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => {
      const baseLink = (ctx?.slots.value ?? paginationVariants()).link()
      return (
        <RekaPaginationPrev
          {...attrs}
          data-slot="pagination-previous"
          class={cn(baseLink, 'pagination__link--nav', props.class)}
        >
          {slots.default
            ? slots.default()
            : <IconChevronLeft aria-hidden="true" data-slot="pagination-previous-icon" />}
        </RekaPaginationPrev>
      )
    }
  }
})

export default PaginationPrevious
