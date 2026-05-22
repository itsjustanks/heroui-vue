import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableFooter — HeroUI `table__footer` (`<tfoot>`).
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
        class={cn('table__footer', props.class)}
      >
        {slots.default?.()}
      </tfoot>
    )
  }
})

export default TableFooter
