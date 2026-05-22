import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbPage — the current (non-interactive) crumb.
 *
 * HeroUI `breadcrumbs__link[data-current]`: emphasised `text-foreground`, no
 * underline. Marked `aria-current="page"` and `aria-disabled`.
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
        class={cn('font-medium text-foreground', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default BreadcrumbPage
