import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/** TableLoadMoreContent — content wrapper inside `Table.LoadMore`. */
export const TableLoadMoreContent = defineComponent({
  name: 'TableLoadMoreContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)

    return () => {
      const tableSlots = ctx?.slots.value ?? tableVariants()

      return (
        <div
          {...attrs}
          data-slot="table-load-more-content"
          class={cn(tableSlots.loadMoreContent(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default TableLoadMoreContent
