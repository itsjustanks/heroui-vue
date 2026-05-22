import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { provideMeterContext } from './meter-context'
import type { TMeterColor, TMeterSize } from './variants'

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

/**
 * Meter — HeroUI-Vue meter root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `Meter` — a **labelled quantity indicator within a
 * known range**, distinct from `Progress`: a `Progress` shows task completion,
 * a `Meter` shows a static measured value (disk usage, score, capacity). HeroUI
 * builds it on React Aria's `Meter`; reka-ui has no `Meter` primitive, so the
 * value math (`clamp` + percentage) lives here and is shared with the compound
 * parts via context.
 *
 * Adapts HeroUI's `meter` BEM: a 2-row CSS grid — `"label output"` on top,
 * `"track track"` below. The root carries `role="meter"` plus the
 * `aria-valuenow` / `aria-valuemin` / `aria-valuemax` / `aria-valuetext`
 * attributes React Aria would emit.
 *
 * `value` gives a `v-model` binding (a meter is read-only, so it never emits an
 * update — `value` is just the displayed measurement).
 *
 * Compound API: `Meter`, `MeterLabel`, `MeterOutput`, `MeterTrack`, `MeterFill`
 * — mirrors HeroUI's `Meter.*` parts (`MeterLabel` ≅ HeroUI's `Label` slot).
 */
export const Meter = defineComponent({
  name: 'MeterView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The measured value. */
    value: { type: Number, default: 0 },
    /** Lower bound of the range. */
    minValue: { type: Number, default: 0 },
    /** Upper bound of the range. */
    maxValue: { type: Number, default: 100 },
    /** Size variant. */
    size: { type: String as PropType<TMeterSize>, default: 'md' },
    /** Colour variant. */
    color: { type: String as PropType<TMeterColor>, default: 'accent' },
    /** `Intl.NumberFormat` options for the formatted value text. Defaults to a percent string. */
    formatOptions: { type: Object as PropType<Intl.NumberFormatOptions>, default: undefined },
    /** Whether the meter is disabled (dims the surface). */
    disabled: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
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

    provideMeterContext({
      percentage,
      valueText,
      size: computed(() => props.size),
      color: computed(() => props.color)
    })

    return () => (
      <div
        {...attrs}
        role="meter"
        aria-valuenow={props.value}
        aria-valuemin={props.minValue}
        aria-valuemax={props.maxValue}
        aria-valuetext={valueText.value}
        aria-disabled={props.disabled || undefined}
        data-slot="meter"
        data-disabled={props.disabled || undefined}
        class={cn(
          'grid w-full gap-1',
          props.disabled && 'opacity-50',
          props.class
        )}
        style={{ gridTemplateColumns: '1fr auto' }}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Meter
