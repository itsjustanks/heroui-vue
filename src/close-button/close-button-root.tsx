import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { X as IconX } from 'lucide-vue-next'
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
        class={cn(
          'relative isolate inline-flex size-6 shrink-0 origin-center select-none items-center justify-center rounded-lg p-1',
          'bg-muted text-muted-foreground transition-[transform,color,background-color]',
          'hover:bg-muted/80 active:scale-95',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          props.class
        )}
      >
        {slots.default ? slots.default() : <IconX data-slot="close-button-icon" />}
      </Primitive>
    )
  }
})

export default CloseButtonRoot
