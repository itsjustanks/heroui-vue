import { defineComponent, inject, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { meterVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { METER_CONTEXT } from './meter-context'

/** Meter.Fill — the filled progress bar (HeroUI `meter__fill`). Width is driven by context percentage. */
export const MeterFill = defineComponent({
  name: 'MeterFill',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Extra inline styles merged onto the fill element — mirrors HeroUI's `style` prop. */
    style: { type: Object as PropType<CSSProperties>, default: undefined },
  },
  setup (props, { attrs }) {
    const ctx = inject(METER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="meter-fill"
        style={{ ...props.style, width: `${ctx?.percentage.value ?? 0}%` }}
        class={cn((ctx?.slots.value ?? meterVariants()).fill(), props.class)}
      />
    )
  }
})

export default MeterFill
