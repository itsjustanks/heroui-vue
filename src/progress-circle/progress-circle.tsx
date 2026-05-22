import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { ProgressRoot } from 'reka-ui'
import { progressCircleVariants, type ProgressCircleVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { PROGRESS_CIRCLE_CONTEXT } from './progress-circle-context'

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

/**
 * ProgressCircleRoot — the circular progress container. Faithful Vue port of HeroUI v3 `ProgressCircleRoot`.
 *
 * Computes HeroUI's `progressCircleVariants` slot map and provides it (plus
 * reactive geometry state) to compound parts (`ProgressCircle.Track`,
 * `.TrackCircle`, `.FillCircle`). Uses reka-ui `ProgressRoot` for the
 * `progressbar` ARIA role. When `value` is `null`/omitted the circle is
 * indeterminate — the CSS `progress-circle-spin` keyframe applies.
 */
export const ProgressCircleRoot = defineComponent({
  name: 'ProgressCircleRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Current value. `null`/omitted → indeterminate (spinning arc). */
    value: { type: [Number, null] as PropType<number | null>, default: null },
    /** Lower bound of the range. @default 0 */
    minValue: { type: Number, default: 0 },
    /** Upper bound of the range. @default 100 */
    maxValue: { type: Number, default: 100 },
    /** Color variant. @default 'accent' */
    color: { type: String as PropType<ProgressCircleVariants['color']>, default: 'accent' },
    /** Size variant. @default 'md' */
    size: { type: String as PropType<ProgressCircleVariants['size']>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => progressCircleVariants({ color: props.color, size: props.size }))

    const isIndeterminate = computed(() => props.value == null)

    const percentage = computed(() => {
      if (isIndeterminate.value) return 0
      const span = props.maxValue - props.minValue
      if (span <= 0) return 0
      return clamp((((props.value as number) - props.minValue) / span) * 100, 0, 100)
    })

    provide(PROGRESS_CIRCLE_CONTEXT, { slots: styles, percentage, isIndeterminate })

    return () => (
      <ProgressRoot
        {...attrs}
        modelValue={isIndeterminate.value ? null : percentage.value}
        data-slot="progress-circle"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </ProgressRoot>
    )
  }
})

export default ProgressCircleRoot
