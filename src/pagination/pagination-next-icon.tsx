import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * PaginationNextIcon — the icon slot inside `PaginationNext`.
 * Faithful Vue port of HeroUI v3 `Pagination.NextIcon`.
 *
 * Renders a `<span aria-hidden>` wrapping a chevron-right icon (or custom child).
 */
export const PaginationNextIcon = defineComponent({
  name: 'PaginationNextIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="pagination-next-icon"
        class={cn(props.class)}
      >
        {slots.default ? slots.default() : <IconChevronRight />}
      </span>
    )
  }
})

export default PaginationNextIcon
