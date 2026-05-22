import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconChevronRight } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbSeparator — HeroUI `breadcrumbs__separator`: a small chevron between
 * crumbs. Decorative — `aria-hidden`. Defaults to a chevron; slot overrides.
 */
export const BreadcrumbSeparator = defineComponent({
  name: 'BreadcrumbSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <li
        {...attrs}
        data-slot="breadcrumb-separator"
        role="presentation"
        aria-hidden="true"
        class={cn('[&>svg]:size-3.5', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronRight />}
      </li>
    )
  }
})

export default BreadcrumbSeparator
