import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { meterVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { METER_CONTEXT } from './meter-context'

/** Meter.Track — the track rail that contains the fill bar (HeroUI `meter__track`). */
export const MeterTrack = defineComponent({
  name: 'MeterTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(METER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="meter-track"
        class={cn((ctx?.slots.value ?? meterVariants()).track(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default MeterTrack
