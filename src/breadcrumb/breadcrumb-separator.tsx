import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ChevronRight as IconChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbSeparator — HeroUI BEM: `breadcrumbs__separator`.
 * Decorative — `aria-hidden`. Defaults to a chevron; slot overrides.
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
        role="presentation"
        aria-hidden="true"
        class={cn('breadcrumbs__separator', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronRight />}
      </li>
    )
  }
})

export default BreadcrumbSeparator
