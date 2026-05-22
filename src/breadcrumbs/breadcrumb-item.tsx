import { defineComponent, inject, type HTMLAttributes, type PropType, type VNode } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { breadcrumbsVariants } from '@heroui/styles'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'
import { BREADCRUMBS_CONTEXT } from './breadcrumb-context'

/**
 * BreadcrumbsItem — a single crumb. Faithful Vue port of HeroUI v3 `Breadcrumbs.Item`.
 *
 * Renders a `<li>` (item slot) containing a `<a>` link (link slot) and, unless
 * `isCurrent` is true, a separator icon (separator slot).
 * `as` / `asChild` on the link element allow router-link integration.
 */
export const BreadcrumbsItem = defineComponent({
  name: 'BreadcrumbsItem',
  inheritAttrs: false,
  props: {
    class:      { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Marks this crumb as the current page — hides the separator and applies aria-current. */
    isCurrent:  { type: Boolean, default: false },
    /** Custom separator node rendered between crumbs. Defaults to a chevron icon. */
    separator:  { type: Object as PropType<VNode>, default: undefined },
    as:         { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'a' },
    asChild:    { type: Boolean as PropType<PrimitiveProps['asChild']>, default: false },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(BREADCRUMBS_CONTEXT, null)

    return () => {
      const slotMap = ctx?.slots.value ?? breadcrumbsVariants({})

      return (
        <li
          data-slot="breadcrumbs-item"
          class={cn(slotMap.item(), props.class)}
        >
          <Primitive
            {...attrs}
            as={props.as}
            asChild={props.asChild}
            data-slot="link"
            data-current={props.isCurrent ? 'true' : undefined}
            aria-current={props.isCurrent ? 'page' : undefined}
            class={cn(slotMap.link())}
          >
            {slots.default?.()}
          </Primitive>

          {!props.isCurrent && (
            props.separator
              ? <span data-slot="breadcrumbs-separator" class={cn(slotMap.separator())}>{props.separator}</span>
              : <IconChevronRight data-slot="breadcrumbs-separator" class={cn(slotMap.separator())} />
          )}
        </li>
      )
    }
  }
})

export default BreadcrumbsItem
