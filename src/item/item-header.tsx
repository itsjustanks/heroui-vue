import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ItemHeader — a full-width header band inside a wrapped row. */
export const ItemHeader = defineComponent({
  name: 'ItemHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="item-header"
        class={cn('flex basis-full items-center justify-between gap-2', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ItemHeader
