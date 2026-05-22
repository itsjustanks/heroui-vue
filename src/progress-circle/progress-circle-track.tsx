import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { CENTER } from './constants'

/**
 * ProgressCircleTrack — the `<svg>` canvas of the ring. HeroUI v3
 * `ProgressCircle.Track`.
 *
 * Emits HeroUI BEM class `progress-circle__track`. The CSS sizes the SVG via
 * the parent `progress-circle--{size}` modifier. When indeterminate the CSS
 * `progress-circle-spin` keyframe is applied via the `:not([aria-valuenow])`
 * selector on the parent root.
 */
export const ProgressCircleTrack = defineComponent({
  name: 'ProgressCircleTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <svg
        {...attrs}
        fill="none"
        viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
        class={cn('progress-circle__track', props.class)}
      >
        {slots.default?.()}
      </svg>
    )
  }
})

export default ProgressCircleTrack
