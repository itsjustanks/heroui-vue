import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { meterVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { METER_CONTEXT } from './meter-context'

/** Meter.Output — the value readout (HeroUI `meter__output`). Defaults to the formatted `valueText`. */
export const MeterOutput = defineComponent({
  name: 'MeterOutput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(METER_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="meter-output"
        class={cn((ctx?.slots.value ?? meterVariants()).output(), props.class)}
      >
        {slots.default ? slots.default() : ctx?.valueText.value}
      </span>
    )
  }
})

export default MeterOutput
