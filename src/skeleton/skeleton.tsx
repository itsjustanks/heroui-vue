import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { skeletonVariants, type SkeletonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * SkeletonRoot — faithful Vue port of HeroUI v3 `SkeletonRoot`.
 *
 * Applies BEM classes from `skeletonVariants` in `@heroui/styles`. The styles
 * object has a `base` slot — call `.base()` for the class string.
 */
export const SkeletonRoot = defineComponent({
  name: 'SkeletonRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Animation type — `skeleton--{animationType}`. @default 'shimmer' */
    animationType: { type: String as PropType<SkeletonVariants['animationType']>, default: 'shimmer' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => skeletonVariants({ animationType: props.animationType }))
    return () => (
      <div
        {...attrs}
        data-slot="skeleton"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default SkeletonRoot
