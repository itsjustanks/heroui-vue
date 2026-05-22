import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { MoreHorizontal as IconMoreHorizontal } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbEllipsis — a collapsed-crumbs placeholder. Decorative `aria-hidden`
 * span with an `sr-only` "More" label. Defaults to a horizontal-dots icon.
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
        class={cn('flex h-9 w-9 items-center justify-center', props.class)}
      >
        {slots.default ? slots.default() : <IconMoreHorizontal class="h-4 w-4" />}
        <span class="sr-only">More</span>
      </span>
    )
  }
})

export default BreadcrumbEllipsis
