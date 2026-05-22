import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariants } from './button-variants'

/**
 * Button — HeroUI-Vue primitive over reka-ui `Primitive`. Faithful port of
 * `shadcn/button`: pill-shaped (`rounded-3xl`), six variants + six sizes.
 * `as` / `asChild` polymorphism via reka-ui `Primitive`.
 */
export const Button = defineComponent({
  name: 'HeroButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<ButtonVariants['variant']>, default: undefined },
    size: { type: String as PropType<ButtonVariants['size']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        class={cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default Button
