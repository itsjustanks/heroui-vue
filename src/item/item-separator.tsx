import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { type SeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { Separator } from '@/separator'

/** ItemSeparator — a hairline divider between rows in an `ItemGroup`. */
export const ItemSeparator = defineComponent({
  name: 'ItemSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    decorative: { type: Boolean as PropType<SeparatorProps['decorative']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <Separator
        {...attrs}
        data-slot="item-separator"
        orientation="horizontal"
        decorative={props.decorative}
        class={cn('my-0', props.class)}
      />
    )
  }
})

export default ItemSeparator
