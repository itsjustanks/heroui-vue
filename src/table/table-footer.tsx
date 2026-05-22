import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableFooter — HeroUI `table__footer` (`<tfoot>`). Muted summary row with a
 * top hairline, adapted to the repo `border-border` / `bg-muted` tokens.
 */
export const TableFooter = defineComponent({
  name: 'TableFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <tfoot
        {...attrs}
        class={cn('border-t border-border bg-muted/50 font-medium [&>tr]:last:border-b-0', props.class)}
      >
        {slots.default?.()}
      </tfoot>
    )
  }
})

export default TableFooter
