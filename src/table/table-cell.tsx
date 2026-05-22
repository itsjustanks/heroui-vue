import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableCell — HeroUI `table__cell` (`<td>`). Comfortable `px-4 py-3` padding
 * per HeroUI v3 taste.
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
        class={cn('px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0', props.class)}
      >
        {slots.default?.()}
      </td>
    )
  }
})

export default TableCell
