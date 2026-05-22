import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableFooter — `<tfoot>` element. Faithful Vue port of HeroUI v3
 * `Table.Footer` (`table__footer`).
 */
export const TableFooter = defineComponent({
  name: 'TableFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <tfoot
        {...attrs}
        data-slot="table-footer"
        class={cn((ctx?.slots.value ?? tableVariants()).footer(), props.class)}
      >
        {slots.default?.()}
      </tfoot>
    )
  },
})

export default TableFooter
