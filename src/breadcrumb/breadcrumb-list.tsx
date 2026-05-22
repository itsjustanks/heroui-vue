import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbList — the ordered list of crumbs.
 *
 * HeroUI `breadcrumbs`: `flex items-center`, quiet `text-muted-foreground`
 * baseline. Wraps gracefully and uses a compact gap.
 */
export const BreadcrumbList = defineComponent({
  name: 'BreadcrumbList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ol
        {...attrs}
        class={cn(
          'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
          props.class
        )}
      >
        {slots.default?.()}
      </ol>
    )
  }
})

export default BreadcrumbList
