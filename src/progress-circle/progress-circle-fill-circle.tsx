import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { useProgressCircleContext } from './progress-circle-context'
import { CENTER, CIRCUMFERENCE, RADIUS, STROKE_WIDTH } from './constants'

/**
 * ProgressCircleFillCircle — the filled progress arc `<circle>`. HeroUI v3
 * `ProgressCircle.FillCircle`.
 *
 * Adapts HeroUI's `progress-circle__fill-circle`: the same circle as the track,
 * stroked with the `color` token, drawn as an arc via `stroke-dasharray` /
 * `stroke-dashoffset`. The offset shrinks as progress rises (a smooth
 * `stroke-dashoffset` transition); a `rotate(-90)` puts 0 % at the top.
 * Indeterminate → a fixed 25 % arc (the parent `<svg>` spins it). Geometry is
 * verbatim from HeroUI's component.
 */
export const ProgressCircleFillCircle = defineComponent({
  name: 'ProgressCircleFillCircle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = useProgressCircleContext()
    const strokeDashoffset = computed(() => (
      ctx.isIndeterminate.value
        ? CIRCUMFERENCE * 0.75
        : CIRCUMFERENCE - (ctx.percentage.value / 100) * CIRCUMFERENCE
    ))
    return () => (
      <circle
        {...attrs}
        data-slot="progress-circle-fill-circle"
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        stroke-width={STROKE_WIDTH}
        stroke-linecap="round"
        stroke-dasharray={CIRCUMFERENCE}
        stroke-dashoffset={strokeDashoffset.value}
        transform={`rotate(-90 ${CENTER} ${CENTER})`}
        class={cn('progress-circle__fill-circle', props.class)}
      />
    )
  }
})

export default ProgressCircleFillCircle
