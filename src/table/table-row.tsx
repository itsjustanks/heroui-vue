import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableRow — HeroUI `table__row` (`<tr>`). Hairline bottom border, `bg-muted/50`
 * hover, `data-[state=selected]:bg-muted` selected state.
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
        class={cn(
          'border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
          props.class
        )}
      >
        {slots.default?.()}
      </tr>
    )
  }
})

export default TableRow
