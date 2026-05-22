import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ItemTitle — the row's primary label. */
export const ItemTitle = defineComponent({
  name: 'ItemTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="item-title"
        class={cn('flex w-fit items-center gap-2 text-sm font-medium leading-snug', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ItemTitle
