import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableColumnResizer — Vue shim for HeroUI React's `Table.ColumnResizer`.
 *
 * Vue/reka does not expose React Aria's resizer primitive, so this part emits
 * the public slot and BEM class for parity while leaving resize behavior to the
 * consumer or a future dedicated table primitive.
 */
export const TableColumnResizer = defineComponent({
  name: 'TableColumnResizer',
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
          data-slot="table-column-resizer"
          class={cn(tableSlots.columnResizer(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default TableColumnResizer
