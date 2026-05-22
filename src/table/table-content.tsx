import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableContent — the `<table>` element. Faithful Vue port of HeroUI v3
 * `Table.Content` (`table__content`).
 */
export const TableContent = defineComponent({
  name: 'TableContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <table
        {...attrs}
        data-slot="table-content"
        class={cn((ctx?.slots.value ?? tableVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </table>
    )
  },
})

export default TableContent
