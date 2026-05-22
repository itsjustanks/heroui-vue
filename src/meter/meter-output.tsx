import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { useMeterContext } from './meter-context'

/**
 * MeterOutput — the meter's value readout. HeroUI v3 `Meter.Output`.
 *
 * Adapts HeroUI's `meter__output`: a `text-sm font-medium tabular-nums` readout
 * in the grid's `output` cell (top-right). Renders the context's formatted
 * `valueText` when no children are provided, mirroring HeroUI's
 * `children ?? state.valueText`.
 */
export const MeterOutput = defineComponent({
  name: 'MeterOutput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = useMeterContext()
    return () => (
      <span
        {...attrs}
        data-slot="meter-output"
        class={cn('meter__output', props.class)}
      >
        {slots.default ? slots.default() : ctx.valueText.value}
      </span>
    )
  }
})

export default MeterOutput
