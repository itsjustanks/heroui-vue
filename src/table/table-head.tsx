import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableHead — HeroUI `table__column` (`<th>`).
 */
export const TableHead = defineComponent({
  name: 'TableHead',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <th
        {...attrs}
        class={cn('table__column', props.class)}
      >
        {slots.default?.()}
      </th>
    )
  }
})

export default TableHead
