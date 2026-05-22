import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { ButtonGroupVariants } from './button-group-variants'

/**
 * ButtonGroup — HeroUI-Vue primitive over reka-ui `Primitive`. Faithful port of
 * `shadcn/button-group`: a `role="group"` container that collapses the radius /
 * borders of adjacent children. `as` / `asChild` polymorphism via `Primitive`.
 */
export const ButtonGroup = defineComponent({
  name: 'HeroButtonGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<ButtonGroupVariants['orientation']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...(attrs as Record<string, any>)}
        {...({ role: 'group', 'data-slot': 'button-group', 'data-orientation': props.orientation } as Record<string, any>)}
        as={props.as}
        asChild={props.asChild}
        class={cn(
          "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          props.class
        )}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default ButtonGroup
