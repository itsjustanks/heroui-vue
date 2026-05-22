import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { paginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationPrevious — the "go to previous page" nav control.
 * Faithful Vue port of HeroUI v3 `Pagination.Previous` (`pagination__link--nav`).
 *
 * Presentational only — the consumer wires `isDisabled` / `onPress` itself.
 */
export const PaginationPrevious = defineComponent({
  name: 'PaginationPrevious',
  inheritAttrs: false,
  props: {
    class:   { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as:      { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(PAGINATION_CONTEXT, null)
    return () => {
      const baseLink = (ctx?.slots.value ?? paginationVariants()).link()
      return (
        <Primitive
          {...attrs}
          as={props.as}
          asChild={props.asChild}
          data-slot="pagination-previous"
          class={cn(`${baseLink} pagination__link--nav`.trim(), props.class)}
        >
          {slots.default?.()}
        </Primitive>
      )
    }
  }
})

export default PaginationPrevious
