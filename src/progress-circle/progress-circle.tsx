import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ProgressRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { provideProgressCircleContext } from './progress-circle-context'
import type { TProgressCircleColor, TProgressCircleSize } from './constants'

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

/**
 * ProgressCircle — HeroUI-Vue circular progress indicator (primitive library,
 * net-new).
 *
 * Faithful port of HeroUI v3 `ProgressCircle` — a circular counterpart to the
 * `Progress` bar. HeroUI builds it on React Aria's `ProgressBar`; here reka-ui's
 * `ProgressRoot` provides the `progressbar` role + `aria-valuenow/min/max`
 * a11y, and the SVG ring is rendered as its child. The geometry math
 * (`percentage`, `isIndeterminate`) is shared with the compound parts via
 * context.
 *
 * When `value` is `null`/omitted the circle is **indeterminate** — a partial
 * arc spins (adapts HeroUI's `progress-circle-spin` keyframe via Tailwind's
 * `animate-spin`).
 *
 * `value` gives a `v-model`-style binding (progress is driven by the consumer,
 * so the root never emits an update).
 *
 * Compound API: `ProgressCircle`, `ProgressCircleTrack`,
 * `ProgressCircleTrackCircle`, `ProgressCircleFillCircle` — mirrors HeroUI's
 * `ProgressCircle.*` parts.
 */
export const ProgressCircle = defineComponent({
  name: 'ProgressCircleView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The progress value. `null`/omitted → indeterminate (spinning arc). */
    value: { type: [Number, null] as PropType<number | null>, default: null },
    /** Lower bound of the range. */
    minValue: { type: Number, default: 0 },
    /** Upper bound of the range. */
    maxValue: { type: Number, default: 100 },
    /** Size variant. */
    size: { type: String as PropType<TProgressCircleSize>, default: 'md' },
    /** Colour variant. */
    color: { type: String as PropType<TProgressCircleColor>, default: 'accent' }
  },
  setup (props, { attrs, slots }) {
    const isIndeterminate = computed(() => props.value == null)

    const percentage = computed(() => {
      if (isIndeterminate.value) return 0
      const span = props.maxValue - props.minValue
      if (span <= 0) return 0
      return clamp((((props.value ?? 0) - props.minValue) / span) * 100, 0, 100)
    })

    provideProgressCircleContext({
      percentage,
      isIndeterminate,
      size: computed(() => props.size),
      color: computed(() => props.color)
    })

    return () => (
      <ProgressRoot
        {...attrs}
        modelValue={isIndeterminate.value ? null : percentage.value}
        data-slot="progress-circle"
        class={cn('inline-flex items-center justify-center', props.class)}
      >
        {slots.default?.()}
      </ProgressRoot>
    )
  }
})

export default ProgressCircle
