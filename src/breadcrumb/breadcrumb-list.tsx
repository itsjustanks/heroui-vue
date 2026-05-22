import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * BreadcrumbList — the ordered list of crumbs.
 * HeroUI BEM: `breadcrumbs` — flex row container with item gap.
 */
export const BreadcrumbList = defineComponent({
  name: 'BreadcrumbList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ol {...attrs} class={cn('breadcrumbs', props.class)}>
        {slots.default?.()}
      </ol>
    )
  }
})

export default BreadcrumbList
