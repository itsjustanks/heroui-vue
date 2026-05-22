import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ItemContent — the title/description column that fills the row's free space. */
export const ItemContent = defineComponent({
  name: 'ItemContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="item-content"
        class={cn('flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ItemContent
