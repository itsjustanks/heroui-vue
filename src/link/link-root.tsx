import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * LinkRoot — HeroUI-Vue Link primitive. A styled anchor.
 *
 * Faithful port of HeroUI v3 `LinkRoot` (`link.css`): `text-link` foreground,
 * subtle underline that strengthens on hover, focus ring. Renders an `<a>` by
 * default; `as` / `asChild` polymorphism via reka-ui `Primitive` so it can wrap
 * a router-link. `disabled` maps to `aria-disabled` (HeroUI's `isDisabled`).
 */
export const LinkRoot = defineComponent({
  name: 'LinkRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** When `true`, renders as disabled (`aria-disabled`, no pointer events). */
    disabled: { type: Boolean, default: false },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'a' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        data-slot="link"
        aria-disabled={props.disabled || undefined}
        data-disabled={props.disabled ? '' : undefined}
        class={cn(
          'relative inline-flex h-fit w-fit items-center gap-0.5 rounded-md text-sm font-medium',
          'text-link underline decoration-[1.5px] decoration-border underline-offset-4',
          'transition-colors hover:decoration-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          props.disabled && 'pointer-events-none opacity-50',
          props.class
        )}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default LinkRoot
