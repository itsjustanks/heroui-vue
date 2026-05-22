import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbPage — the current (non-interactive) crumb.
 * HeroUI BEM: `breadcrumbs__link` with `data-current="true"` (CSS targets this for accent color).
 * Marked `aria-current="page"` and `aria-disabled`.
 */
export const BreadcrumbPage = defineComponent({
  name: 'BreadcrumbPage',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        role="link"
        aria-disabled="true"
        aria-current="page"
        data-current="true"
        class={cn('breadcrumbs__link', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default BreadcrumbPage
