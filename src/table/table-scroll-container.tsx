import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableScrollContainer — the horizontal-scroll wrapper inside `TableRoot`.
 * Faithful Vue port of HeroUI v3 `Table.ScrollContainer` (`table__scroll-container`).
 */
export const TableScrollContainer = defineComponent({
  name: 'TableScrollContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TABLE_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="table-scroll-container"
        class={cn((ctx?.slots.value ?? tableVariants()).scrollContainer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default TableScrollContainer
