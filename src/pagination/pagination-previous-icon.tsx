import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconChevronLeft } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * PaginationPreviousIcon — the icon slot inside `PaginationPrevious`.
 * Faithful Vue port of HeroUI v3 `Pagination.PreviousIcon`.
 *
 * Renders a `<span aria-hidden>` wrapping a chevron-left icon (or custom child).
 */
export const PaginationPreviousIcon = defineComponent({
  name: 'PaginationPreviousIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="pagination-previous-icon"
        class={cn(props.class)}
      >
        {slots.default ? slots.default() : <IconChevronLeft />}
      </span>
    )
  }
})

export default PaginationPreviousIcon
