import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Table — HeroUI v3 `table` content (`<table>` element) wrapped in a
 * horizontally scrollable container. Faithful port of `shadcn/table` Table.
 */
export const Table = defineComponent({
  name: 'TableRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div class="relative w-full overflow-auto">
        <table {...attrs} class={cn('w-full caption-bottom text-sm', props.class)}>
          {slots.default?.()}
        </table>
      </div>
    )
  }
})

export default Table
