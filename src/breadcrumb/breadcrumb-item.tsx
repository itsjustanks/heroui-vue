import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** BreadcrumbItem — HeroUI BEM: `breadcrumbs__item`. Single crumb `<li>` wrapper. */
export const BreadcrumbItem = defineComponent({
  name: 'BreadcrumbItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <li {...attrs} class={cn('breadcrumbs__item', props.class)}>
        {slots.default?.()}
      </li>
    )
  }
})

export default BreadcrumbItem
