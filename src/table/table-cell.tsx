import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableCell — HeroUI `table__cell` (`<td>`).
 */
export const TableCell = defineComponent({
  name: 'TableCell',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <td
        {...attrs}
        class={cn('table__cell', props.class)}
      >
        {slots.default?.()}
      </td>
    )
  }
})

export default TableCell
