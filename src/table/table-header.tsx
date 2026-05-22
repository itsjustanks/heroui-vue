import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableHeader — HeroUI `table__header` (`<thead>`).
 */
export const TableHeader = defineComponent({
  name: 'TableHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <thead {...attrs} class={cn('table__header', props.class)}>
        {slots.default?.()}
      </thead>
    )
  }
})

export default TableHeader
