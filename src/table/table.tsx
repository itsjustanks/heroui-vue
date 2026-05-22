import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { tableVariants, type TableVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TABLE_CONTEXT } from './table-context'

/**
 * TableRoot — the outermost table container. Faithful Vue port of HeroUI v3 `Table`.
 *
 * Computes `tableVariants` slot map and provides it to all compound parts so
 * every child uses HeroUI's BEM classes — never hand-written strings.
 *
 * HeroUI DOM structure:
 *   <div data-slot="table">                      ← TableRoot
 *     <div data-slot="table-scroll-container">   ← Table.ScrollContainer
 *       <table data-slot="table-content">        ← Table.Content
 *         …
 *       </table>
 *     </div>
 *   </div>
 */
export const TableRoot = defineComponent({
  name: 'Table',
  inheritAttrs: false,
  props: {
    class:   { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant: { type: String as PropType<TableVariants['variant']>, default: 'primary' },
  },
  setup (props, { attrs, slots }) {
    const slots_ = computed(() => tableVariants({ variant: props.variant }))
    provide(TABLE_CONTEXT, { slots: slots_ })

    return () => (
      <div
        {...attrs}
        data-slot="table"
        class={cn(slots_.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default TableRoot
