import { computed, defineComponent, provide, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { meterVariants, type MeterVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { METER_CONTEXT } from './meter-context'

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

/**
 * MeterRoot — the measurement container. Faithful Vue port of HeroUI v3 `Meter`.
 *
 * A `Meter` shows a static measured value within a known range (disk usage,
 * score, capacity) — distinct from `Progress` which shows task completion.
 * Computes HeroUI's `meterVariants` slot map and provides it plus reactive
 * `percentage` / `valueText` state to compound parts.
 */
export const MeterRoot = defineComponent({
  name: 'Meter',
  inheritAttrs: false,
  props: {
    class:         { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    style:         { type: Object as PropType<CSSProperties>, default: undefined },
    /** Colour variant. @default 'accent' */
    color:         { type: String as PropType<MeterVariants['color']>, default: 'accent' },
    /** Size variant. @default 'md' */
    size:          { type: String as PropType<MeterVariants['size']>, default: 'md' },
    /** The measured value. */
    value:         { type: Number, default: 0 },
    /** Lower bound of the range. @default 0 */
    minValue:      { type: Number, default: 0 },
    /** Upper bound of the range. @default 100 */
    maxValue:      { type: Number, default: 100 },
    /** `Intl.NumberFormat` options for the formatted value text. Defaults to percent. */
    formatOptions: { type: Object as PropType<Intl.NumberFormatOptions>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => meterVariants({ color: props.color, size: props.size }))

    const percentage = computed(() => {
      const span = props.maxValue - props.minValue
      if (span <= 0) return 0
      return clamp(((props.value - props.minValue) / span) * 100, 0, 100)
    })

    const valueText = computed(() => {
      if (props.formatOptions) {
        return new Intl.NumberFormat(undefined, props.formatOptions).format(props.value)
      }
      return `${Math.round(percentage.value)}%`
    })

    provide(METER_CONTEXT, { slots: styles, percentage, valueText })

    return () => (
      <div
        {...attrs}
        role="meter"
        aria-valuenow={props.value}
        aria-valuemin={props.minValue}
        aria-valuemax={props.maxValue}
        aria-valuetext={valueText.value}
        data-slot="meter"
        style={props.style}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default MeterRoot
