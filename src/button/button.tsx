import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { buttonVariants, type ButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * Button — faithful Vue port of HeroUI v3 `Button`.
 *
 * Renders via reka-ui `Primitive` for `as` / `asChild` polymorphism.
 * Styling is sourced exclusively from `@heroui/styles` `buttonVariants`.
 */
export const ButtonRoot = defineComponent({
  name: 'Button',
  inheritAttrs: false,
  props: {
    class:      { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant:    { type: String as PropType<ButtonVariants['variant']>, default: 'primary' },
    /** Size scale. @default 'md' */
    size:       { type: String as PropType<ButtonVariants['size']>, default: 'md' },
    /** Square icon-only button — removes horizontal padding. */
    isIconOnly: { type: Boolean as PropType<ButtonVariants['isIconOnly']>, default: false },
    /** Stretches button to full container width. */
    fullWidth:  { type: Boolean as PropType<ButtonVariants['fullWidth']>, default: false },
    /** Whether the button is disabled. */
    isDisabled: { type: Boolean, default: false },
    as:         { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild:    { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        data-slot="button"
        aria-disabled={props.isDisabled || undefined}
        class={cn(
          buttonVariants({
            variant:    props.variant,
            size:       props.size,
            isIconOnly: props.isIconOnly,
            fullWidth:  props.fullWidth,
          }),
          props.class
        )}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default ButtonRoot
