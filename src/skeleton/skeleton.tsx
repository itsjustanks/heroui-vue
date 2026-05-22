import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Skeleton — HeroUI-Vue primitive: a placeholder surface shown while content
 * loads.
 *
 * Maps to HeroUI `skeleton` BEM classes. `animationType` prop selects the
 * shimmer/pulse/none modifier. Defaults to `shimmer` (matching HeroUI's default).
 */
export const Skeleton = defineComponent({
  name: 'SkeletonRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    animationType: {
      type: String as PropType<'shimmer' | 'pulse' | 'none'>,
      default: 'shimmer'
    }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="base"
        class={cn(
          'skeleton',
          props.animationType === 'shimmer' && 'skeleton--shimmer',
          props.animationType === 'pulse' && 'skeleton--pulse',
          props.animationType === 'none' && 'skeleton--none',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Skeleton
