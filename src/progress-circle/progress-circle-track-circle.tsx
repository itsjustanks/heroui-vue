import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { progressCircleVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_CIRCLE_CONTEXT } from './progress-circle-context'
import { CENTER, RADIUS, STROKE_WIDTH } from './constants'

/**
 * ProgressCircleTrackCircle — the unfilled rail `<circle>` (HeroUI `progress-circle__track-circle`).
 *
 * Faithful Vue port of HeroUI v3 `ProgressCircleTrackCircle`. A full circle
 * stroked with the neutral track color. Geometry is verbatim from HeroUI.
 */
export const ProgressCircleTrackCircle = defineComponent({
  name: 'ProgressCircleTrackCircle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(PROGRESS_CIRCLE_CONTEXT, null)
    return () => (
      <circle
        {...attrs}
        data-slot="progress-circle-track-circle"
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        stroke-width={STROKE_WIDTH}
        class={cn((ctx?.slots.value ?? progressCircleVariants()).trackCircle(), props.class)}
      />
    )
  }
})

export default ProgressCircleTrackCircle
