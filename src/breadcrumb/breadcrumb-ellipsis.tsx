import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconMoreHorizontal } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbEllipsis — a collapsed-crumbs placeholder.
 * Decorative `aria-hidden` span. Defaults to a horizontal-dots icon.
 * No dedicated HeroUI BEM class — rendered inside `breadcrumbs__item`.
 */
export const BreadcrumbEllipsis = defineComponent({
  name: 'BreadcrumbEllipsis',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        role="presentation"
        aria-hidden="true"
        class={cn('breadcrumbs__link', props.class)}
      >
        {slots.default ? slots.default() : <IconMoreHorizontal class="size-4" />}
        <span class="sr-only">More</span>
      </span>
    )
  }
})

export default BreadcrumbEllipsis
