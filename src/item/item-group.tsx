import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ItemGroup — a vertical stack of `Item` rows, exposed as a `role="list"`. */
export const ItemGroup = defineComponent({
  name: 'ItemGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        role="list"
        data-slot="item-group"
        class={cn('group/item-group flex flex-col', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ItemGroup
