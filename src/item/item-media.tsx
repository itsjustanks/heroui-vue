import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { itemMediaVariants, type TItemMediaVariants } from './item-variants'

/** ItemMedia — the leading icon/image slot of a row. */
export const ItemMedia = defineComponent({
  name: 'ItemMedia',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TItemMediaVariants['variant']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="item-media"
        data-variant={props.variant}
        class={cn(itemMediaVariants({ variant: props.variant }), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ItemMedia
