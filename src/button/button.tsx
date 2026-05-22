import { defineComponent, inject, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { buttonVariants, type ButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'
import { BUTTON_GROUP_CONTEXT } from '@/button-group/button-group-context'

/**
 * Button — faithful Vue port of HeroUI v3 `Button`.
 *
 * Renders via reka-ui `Primitive` for `as` / `asChild` polymorphism.
 * Styling is sourced exclusively from `@heroui/styles` `buttonVariants`.
 * When rendered inside a `ButtonGroup`, inherits `size`/`variant`/`isDisabled`/
 * `fullWidth` from the group unless explicitly overridden on the button.
 */
export const ButtonRoot = defineComponent({
  name: 'Button',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps,
    /** Visual variant. @default 'primary' */
    variant:    { type: String as PropType<ButtonVariants['variant']>, default: undefined },
    /** Size scale. @default 'md' */
    size:       { type: String as PropType<ButtonVariants['size']>, default: undefined },
    /** Square icon-only button — removes horizontal padding. */
    isIconOnly: { type: Boolean as PropType<ButtonVariants['isIconOnly']>, default: false },
    /** Stretches button to full container width. */
    fullWidth:  { type: Boolean as PropType<ButtonVariants['fullWidth']>, default: undefined },
    as:         { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild:    { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const group = inject(BUTTON_GROUP_CONTEXT, null)

    return () => {
      const finalSize = props.size ?? group?.size?.value
      const finalVariant = props.variant ?? group?.variant?.value
      const finalIsDisabled = reactDisabled(props) ?? group?.isDisabled?.value
      const finalFullWidth = props.fullWidth ?? group?.fullWidth?.value
      const forwardedAttrs = reactPressAttrs(attrs)
      if (finalIsDisabled) forwardedAttrs.disabled = true

      return (
        <Primitive
          {...forwardedAttrs}
          as={props.as}
          asChild={props.asChild}
          data-slot="button"
          data-disabled={finalIsDisabled ? 'true' : undefined}
          aria-disabled={finalIsDisabled || undefined}
          class={cn(
            buttonVariants({
              variant:    finalVariant,
              size:       finalSize,
              isIconOnly: props.isIconOnly,
              fullWidth:  finalFullWidth,
            }),
            reactClass(props)
          )}
        >
          {slots.default?.()}
        </Primitive>
      )
    }
  }
})

export default ButtonRoot
