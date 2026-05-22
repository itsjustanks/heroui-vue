import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableResizableContainer — Vue shim for HeroUI React's resizable table wrapper.
 *
 * It preserves the public anatomy (`data-slot` + BEM class). Actual column
 * resizing can be layered on by consumers until Vue has a matching RAC primitive.
 */
export const TableResizableContainer = defineComponent({
  name: 'TableResizableContainer',
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
          data-slot="table-resizable-container"
          class={cn(tableSlots.resizableContainer(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

export default TableResizableContainer
