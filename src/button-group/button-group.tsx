import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonGroupVariants, type ButtonGroupVariants } from './button-group-variants'

/**
 * ButtonGroup — HeroUI-Vue primitive over reka-ui `Primitive`.
 *
 * HeroUI BEM: `button-group` base + `button-group--{orientation}` + optional
 * `button-group--full-width` modifier. Child `Button` elements have their radius
 * and scale-on-press handled by the CSS.
 */
export const ButtonGroup = defineComponent({
  name: 'HeroButtonGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<ButtonGroupVariants['orientation']>, default: 'horizontal' },
    fullWidth: { type: Boolean, default: false },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...(attrs as Record<string, any>)}
        {...({ role: 'group' } as Record<string, any>)}
        as={props.as}
        asChild={props.asChild}
        class={cn(
          buttonGroupVariants({ orientation: props.orientation, fullWidth: props.fullWidth }),
          props.class
        )}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default ButtonGroup
