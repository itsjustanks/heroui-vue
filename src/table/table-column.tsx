import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableColumn — `<th>` header cell. Faithful Vue port of HeroUI v3
 * `Table.Column` (`table__column`).
 */
export const TableColumn = defineComponent({
  name: 'TableColumn',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <th
        {...attrs}
        data-slot="table-column"
        class={cn((ctx?.slots.value ?? tableVariants()).column(), props.class)}
      >
        {slots.default?.()}
      </th>
    )
  },
})

export default TableColumn
