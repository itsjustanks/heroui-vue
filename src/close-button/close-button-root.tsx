import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { IconX } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * CloseButtonRoot — HeroUI-Vue Close Button primitive.
 *
 * Faithful port of HeroUI v3 `CloseButtonRoot` (`close-button.css`): the
 * standard dismiss control — a small, square, soft-background icon button with
 * an X glyph. Defaults to `aria-label="Close"`; renders a `<button>` by default
 * with `as` / `asChild` polymorphism via reka-ui `Primitive`. A custom child
 * replaces the default X icon.
 */
export const CloseButtonRoot = defineComponent({
  name: 'CloseButtonRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'button' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        aria-label="Close"
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        data-slot="close-button"
        class={cn('close-button', 'close-button--default', props.class)}
      >
        {slots.default ? slots.default() : <IconX data-slot="close-button-icon" />}
      </Primitive>
    )
  }
})

export default CloseButtonRoot
