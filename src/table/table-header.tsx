import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableHeader — `<thead>` element. Faithful Vue port of HeroUI v3
 * `Table.Header` (`table__header`).
 */
export const TableHeader = defineComponent({
  name: 'TableHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <thead
        {...attrs}
        data-slot="table-header"
        class={cn((ctx?.slots.value ?? tableVariants()).header(), props.class)}
      >
        {slots.default?.()}
      </thead>
    )
  },
})

export default TableHeader
