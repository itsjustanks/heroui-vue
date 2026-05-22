import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/** TableLoadMoreItem — row-level slot for incremental table loading controls. */
export const TableLoadMoreItem = defineComponent({
  name: 'TableLoadMoreItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    colspan: { type: [Number, String] as PropType<number | string>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)

    return () => {
      const tableSlots = ctx?.slots.value ?? tableVariants()

      return (
        <tr
          {...attrs}
          data-slot="table-load-more"
          class={cn(tableSlots.loadMore(), props.class)}
        >
          <td colspan={props.colspan}>
            {slots.default?.()}
          </td>
        </tr>
      )
    }
  }
})

export default TableLoadMoreItem
