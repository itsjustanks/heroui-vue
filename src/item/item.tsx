import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { itemVariants, type TItemVariants } from './item-variants'

/**
 * Item — a list-row surface. Faithful port of `shadcn-vue`'s `Item`, restyled
 * to HeroUI v3 taste (`item-card.css`): `rounded-lg`, `gap-3`, soft hover.
 * Renders through reka-ui `Primitive` so `as` / `as-child` work unchanged.
 */
export const Item = defineComponent({
  // `item` collides with no reserved HTML name, but keep the explicit name.
  name: 'Item',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined },
    variant: { type: String as PropType<TItemVariants['variant']>, default: undefined },
    size: { type: String as PropType<TItemVariants['size']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        data-slot="item"
        as={props.as}
        as-child={props.asChild}
        class={cn(itemVariants({ variant: props.variant, size: props.size }), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default Item
