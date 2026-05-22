import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbLink — an interactive crumb.
 *
 * HeroUI `breadcrumbs__link`: NO underline (taste restyle), quiet
 * `text-muted-foreground` that resolves to `text-foreground` on hover. Renders
 * an `<a>` by default; `as` / `asChild` forward to reka-ui `Primitive`.
 */
export const BreadcrumbLink = defineComponent({
  name: 'BreadcrumbLink',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'a' },
    asChild: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        class={cn(
          'font-medium text-muted-foreground no-underline transition-colors hover:text-foreground',
          props.class
        )}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default BreadcrumbLink
