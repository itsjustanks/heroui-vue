import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableCell — `<td>` element. Faithful Vue port of HeroUI v3
 * `Table.Cell` (`table__cell`).
 */
export const TableCell = defineComponent({
  name: 'TableCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <td
        {...attrs}
        data-slot="table-cell"
        class={cn((ctx?.slots.value ?? tableVariants()).cell(), props.class)}
      >
        {slots.default?.()}
      </td>
    )
  },
})

export default TableCell
