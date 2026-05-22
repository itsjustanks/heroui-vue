import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableRow — HeroUI `table__row` (`<tr>`).
 */
export const TableRow = defineComponent({
  name: 'TableRow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <tr
        {...attrs}
        class={cn('table__row', props.class)}
      >
        {slots.default?.()}
      </tr>
    )
  }
})

export default TableRow
