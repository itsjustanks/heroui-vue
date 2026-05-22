import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableHeader — HeroUI `table__header` (`<thead>`). Hairline divider below the
 * header row, adapted to the repo `border-border` token.
 */
export const TableHeader = defineComponent({
  name: 'TableHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <thead {...attrs} class={cn('[&_tr]:border-b [&_tr]:border-border', props.class)}>
        {slots.default?.()}
      </thead>
    )
  }
})

export default TableHeader
