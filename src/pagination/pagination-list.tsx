import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { PaginationList as RekaPaginationList } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * PaginationList — HeroUI-Vue pagination items container.
 *
 * Wraps reka-ui `PaginationList`, whose default scoped slot yields the computed
 * `items` array (page numbers + ellipsis markers). HeroUI calls this slot the
 * `pagination__content`; the host element is provided by reka-ui.
 */
export const PaginationList = defineComponent({
  name: 'PaginationList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaPaginationList
        {...attrs}
        data-slot="pagination-content"
        class={cn('pagination__content', props.class)}
      >
        {{ default: (scope: unknown) => slots.default?.(scope) }}
      </RekaPaginationList>
    )
  }
})

export default PaginationList
