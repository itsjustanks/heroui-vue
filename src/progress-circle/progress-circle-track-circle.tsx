import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { CENTER, RADIUS, STROKE_WIDTH } from './constants'

/**
 * ProgressCircleTrackCircle — the unfilled rail `<circle>`. HeroUI v3
 * `ProgressCircle.TrackCircle`.
 *
 * Adapts HeroUI's `progress-circle__track-circle`: a full circle stroked with
 * the neutral `stroke-muted` token (HeroUI's `--default` track). Geometry
 * (`cx`/`cy`/`r`/`stroke-width`) is verbatim from HeroUI's component.
 */
export const ProgressCircleTrackCircle = defineComponent({
  name: 'ProgressCircleTrackCircle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <circle
        {...attrs}
        data-slot="progress-circle-track-circle"
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        stroke-width={STROKE_WIDTH}
        class={cn('progress-circle__track-circle', props.class)}
      />
    )
  }
})

export default ProgressCircleTrackCircle
