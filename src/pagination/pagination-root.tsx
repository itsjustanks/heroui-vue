import { defineComponent, toRef, type HTMLAttributes, type PropType } from 'vue'
import { PaginationRoot as RekaPaginationRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { providePaginationContext } from './pagination-context'
import type { TPaginationSize } from './pagination-variants'

/**
 * PaginationRoot — HeroUI-Vue Pagination primitive over reka-ui `PaginationRoot`.
 *
 * Faithful port of HeroUI v3 `PaginationRoot`. reka-ui owns the page-math; the
 * page-math props are declared explicitly so the API surface is typed, and the
 * current page binds via `v-model:page`. Adds HeroUI's `size` scale via context.
 * Renders a `<nav>` host.
 */
export const PaginationRoot = defineComponent({
  name: 'PaginationRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Size step shared with all descendant parts. */
    size: { type: String as PropType<TPaginationSize>, default: 'md' },
    /** Number of items per page — drives the page count. */
    itemsPerPage: { type: Number, required: true },
    /** Total number of items in the list. */
    total: { type: Number, default: undefined },
    /** Controlled current page — bind with `v-model:page`. */
    page: { type: Number, default: undefined },
    /** Initial page when uncontrolled. */
    defaultPage: { type: Number, default: undefined },
    /** Number of sibling pages shown around the current page. */
    siblingCount: { type: Number, default: undefined },
    /** When `true`, prevents interaction with all controls. */
    disabled: { type: Boolean, default: undefined },
    /** When `true`, always shows the first/last page and edge ellipsis. */
    showEdges: { type: Boolean, default: undefined }
  },
  emits: {
    /** Emitted when the current page changes. */
    'update:page': (_value: number) => true
  },
  setup (props, { attrs, emit, slots }) {
    providePaginationContext({ size: toRef(props, 'size') })

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
        data-slot="pagination"
        class={cn(
          'flex w-full flex-col items-center justify-between gap-4 sm:flex-row',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaPaginationRoot>
    )
  }
})

export default PaginationRoot
