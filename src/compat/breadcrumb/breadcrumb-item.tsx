import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** BreadcrumbItem — HeroUI `breadcrumbs__item`: a single crumb wrapper `<li>`. */
export const BreadcrumbItem = defineComponent({
  name: 'BreadcrumbItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <li {...attrs}
        data-slot="breadcrumb-item" class={cn('inline-flex items-center gap-1.5', props.class)}>
        {slots.default?.()}
      </li>
    )
  }
})

export default BreadcrumbItem
