import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { TableCell as TableCellBase } from './table-cell'
// Forwards `colspan` (an HTML attr not modelled on TableCell's props).
const TableCell: any = TableCellBase
import { TableRow } from './table-row'

/**
 * TableEmpty — empty-state row spanning the table. Faithful port of
 * `shadcn/table` TableEmpty: a `TableRow` + `TableCell` with a centered slot.
 */
export const TableEmpty = defineComponent({
  name: 'TableEmpty',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    colspan: { type: Number, default: 1 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <TableRow>
        <TableCell
          {...attrs}
          colspan={props.colspan}
          class={cn(props.class)}
        >
          <div class="flex items-center justify-center py-10">
            {slots.default?.()}
          </div>
        </TableCell>
      </TableRow>
    )
  }
})

export default TableEmpty
