import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Table — HeroUI v3 `table-root` BEM classes. The outer div is `table-root`
 * (+ variant modifier), the scroll wrapper is `table__scroll-container`, and
 * the `<table>` element is `table__content`.
 *
 * `variant` prop selects `table-root--primary` (default) or `table-root--secondary`.
 */
export const Table = defineComponent({
  name: 'TableRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary'
    }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div class={cn('table-root', props.variant === 'secondary' ? 'table-root--secondary' : 'table-root--primary')}>
        <div class="table__scroll-container">
          <table {...attrs} class={cn('table__content', props.class)}>
            {slots.default?.()}
          </table>
        </div>
      </div>
    )
  }
})

export default Table
