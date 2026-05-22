import { computed, defineComponent, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { closeButtonVariants, type CloseButtonVariants } from '@heroui/styles'
import { IconX } from '@/icons'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'

/**
 * CloseButtonRoot — the standard dismiss control. Faithful Vue port of HeroUI v3 `CloseButtonRoot`.
 *
 * A small icon button with an X glyph. Defaults to `aria-label="Close"`.
 * Renders a `<button>` by default; `as`/`asChild` polymorphism via reka-ui
 * `Primitive`. A custom child replaces the default X icon. Classes come
 * from `@heroui/styles` `closeButtonVariants` — never a hand-written string.
 */
export const CloseButtonRoot = defineComponent({
  name: 'CloseButtonRoot',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps,
    /** Visual variant. @default 'default' */
    variant: { type: String as PropType<CloseButtonVariants['variant']>, default: 'default' },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => closeButtonVariants({ variant: props.variant }))

    return () => {
      const isDisabled = reactDisabled(props)
      const forwardedAttrs = reactPressAttrs(attrs)
      if (isDisabled) forwardedAttrs.disabled = true

      return (
        <Primitive
          aria-label="Close"
          data-slot="close-button"
          {...forwardedAttrs}
          as={props.as}
          asChild={props.asChild}
          data-disabled={isDisabled ? 'true' : undefined}
          class={cn(styles.value, reactClass(props))}
        >
          {slots.default ? slots.default() : <IconX data-slot="close-button-icon" />}
        </Primitive>
      )
    }
  }
})

export default CloseButtonRoot
