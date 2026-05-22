import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { useProgressCircleContext } from './progress-circle-context'
import { CENTER } from './constants'
import { progressCircleTrackVariants } from './variants'

/**
 * ProgressCircleTrack — the `<svg>` canvas of the ring. HeroUI v3
 * `ProgressCircle.Track`.
 *
 * Adapts HeroUI's `progress-circle__track`: a `36×36` viewBox SVG sized by the
 * `size` variant (read from context). When the circle is **indeterminate** the
 * whole SVG spins (`animate-spin`) — HeroUI's `progress-circle-spin` keyframe.
 * Holds the `ProgressCircleTrackCircle` (rail) and `ProgressCircleFillCircle`
 * (progress arc).
 */
export const ProgressCircleTrack = defineComponent({
  name: 'ProgressCircleTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = useProgressCircleContext()
    return () => (
      <svg
        {...attrs}
        data-slot="progress-circle-track"
        fill="none"
        viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
        class={cn(
          progressCircleTrackVariants({ size: ctx.size.value }),
          ctx.isIndeterminate.value && 'animate-spin motion-reduce:animate-none',
          props.class
        )}
      >
        {slots.default?.()}
      </svg>
    )
  }
})

export default ProgressCircleTrack
