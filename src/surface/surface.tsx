import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { surfaceVariants, type SurfaceVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SURFACE_CONTEXT } from './surface-context'

/**
 * SurfaceRoot — generic styled container. Faithful Vue port of HeroUI v3
 * `SurfaceRoot`, sharing its variant through context for future compound parts.
 */
export const SurfaceRoot = defineComponent({
  name: 'Surface',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined },
    /** Visual variant. @default 'default' */
    variant: { type: String as PropType<SurfaceVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    provide(SURFACE_CONTEXT, { variant: computed(() => props.variant) })

    return () => (
      <Primitive
        {...attrs}
        data-slot="surface"
        as={props.as}
        as-child={props.asChild}
        class={cn(surfaceVariants({ variant: props.variant }), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default SurfaceRoot
