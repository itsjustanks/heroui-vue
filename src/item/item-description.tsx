import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ItemDescription — the row's muted secondary text. */
export const ItemDescription = defineComponent({
  name: 'ItemDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <p
        {...attrs}
        data-slot="item-description"
        class={cn(
          'line-clamp-2 text-balance text-sm font-normal leading-normal text-muted-foreground',
          '[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
          props.class
        )}
      >
        {slots.default?.()}
      </p>
    )
  }
})

export default ItemDescription
