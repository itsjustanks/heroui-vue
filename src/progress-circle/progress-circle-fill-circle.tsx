import { computed, defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { progressCircleVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_CIRCLE_CONTEXT } from './progress-circle-context'
import { CENTER, CIRCUMFERENCE, RADIUS, STROKE_WIDTH } from './constants'

/**
 * ProgressCircleFillCircle — the filled progress arc `<circle>` (HeroUI `progress-circle__fill-circle`).
 *
 * Faithful Vue port of HeroUI v3 `ProgressCircleFillCircle`. The arc is drawn
 * via `stroke-dasharray`/`stroke-dashoffset`; a `rotate(-90)` puts 0% at the
 * top. Indeterminate → a fixed 25% arc that spins via the parent `<svg>`.
 * Geometry is verbatim from HeroUI.
 */
export const ProgressCircleFillCircle = defineComponent({
  name: 'ProgressCircleFillCircle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(PROGRESS_CIRCLE_CONTEXT, null)
    const strokeDashoffset = computed(() => (
      ctx?.isIndeterminate.value
        ? CIRCUMFERENCE * 0.75
        : CIRCUMFERENCE - ((ctx?.percentage.value ?? 0) / 100) * CIRCUMFERENCE
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
        class={cn((ctx?.slots.value ?? progressCircleVariants()).fillCircle(), props.class)}
      />
    )
  }
})

export default ProgressCircleFillCircle
