import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableHead — HeroUI `table__column` (`<th>`). HeroUI v3 column header:
 * `text-xs font-medium text-muted-foreground`, comfortable `px-4` padding.
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
        class={cn(
          'h-11 px-4 text-left align-middle text-xs font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
          props.class
        )}
      >
        {slots.default?.()}
      </th>
    )
  }
})

export default TableHead
