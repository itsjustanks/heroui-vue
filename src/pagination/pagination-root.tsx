import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { PaginationRoot as RekaPaginationRootBase } from 'reka-ui'
const RekaPaginationRoot = RekaPaginationRootBase as any
import { paginationVariants, type PaginationVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PAGINATION_CONTEXT } from './pagination-context'

/**
 * PaginationRoot — the navigation container. Faithful Vue port of HeroUI v3 `Pagination`.
 *
 * Computes HeroUI's `paginationVariants` slot map and provides it to all
 * compound parts. reka-ui `PaginationRoot` owns the page-math logic
 * (`itemsPerPage`, `total`, `v-model:page`, `siblingCount`, `showEdges`).
 */
export const PaginationRoot = defineComponent({
  name: 'PaginationRoot',
  inheritAttrs: false,
  props: {
    class:        { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Size step shared with all descendant parts. @default 'md' */
    size:         { type: String as PropType<PaginationVariants['size']>, default: 'md' },
    /** Number of items per page — drives the page count. */
    itemsPerPage: { type: Number, required: true },
    /** Total number of items in the list. */
    total:        { type: Number, default: undefined },
    /** Controlled current page — bind with `v-model:page`. */
    page:         { type: Number, default: undefined },
    /** Initial page when uncontrolled. */
    defaultPage:  { type: Number, default: undefined },
    /** Number of sibling pages shown around the current page. */
    siblingCount: { type: Number, default: undefined },
    /** When `true`, prevents interaction with all controls. */
    disabled:     { type: Boolean, default: undefined },
    /** When `true`, always shows the first/last page and edge ellipsis. */
    showEdges:    { type: Boolean, default: undefined }
  },
  emits: {
    /** Emitted when the current page changes. */
    'update:page': (_value: number) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => paginationVariants({ size: props.size }))
    provide(PAGINATION_CONTEXT, { slots: styles })

    return () => (
      <RekaPaginationRoot
        {...attrs}
        itemsPerPage={props.itemsPerPage}
        total={props.total}
        page={props.page}
        defaultPage={props.defaultPage}
        siblingCount={props.siblingCount}
        disabled={props.disabled}
        showEdges={props.showEdges}
        onUpdate:page={(value: number) => emit('update:page', value)}
        aria-label="pagination"
        role="navigation"
        data-slot="pagination"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaPaginationRoot>
    )
  }
})

export default PaginationRoot
