import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { headerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * HeaderRoot — section heading container. Faithful Vue port of HeroUI v3
 * `HeaderRoot`, rendering a semantic `<header>` by default.
 */
export const HeaderRoot = defineComponent({
  name: 'Header',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'header' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Primitive
        {...attrs}
        data-slot="header"
        as={props.as}
        as-child={props.asChild}
        class={cn(headerVariants(), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default HeaderRoot
