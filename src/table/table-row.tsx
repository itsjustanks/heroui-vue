import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableRow — `<tr>` element. Faithful Vue port of HeroUI v3
 * `Table.Row` (`table__row`).
 */
export const TableRow = defineComponent({
  name: 'TableRow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <tr
        {...attrs}
        data-slot="table-row"
        class={cn((ctx?.slots.value ?? tableVariants()).row(), props.class)}
      >
        {slots.default?.()}
      </tr>
    )
  },
})

export default TableRow
