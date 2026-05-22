import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableBody — `<tbody>` element. Faithful Vue port of HeroUI v3
 * `Table.Body` (`table__body`).
 */
export const TableBody = defineComponent({
  name: 'TableBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <tbody
        {...attrs}
        data-slot="table-body"
        class={cn((ctx?.slots.value ?? tableVariants()).body(), props.class)}
      >
        {slots.default?.()}
      </tbody>
    )
  },
})

export default TableBody
