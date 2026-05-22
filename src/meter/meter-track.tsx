import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * MeterTrack — the meter's track rail. HeroUI v3 `Meter.Track`.
 *
 * Adapts HeroUI's `meter__track`: a `rounded` `bg-muted` rail spanning the full
 * width of the grid's `track` row. Height + radius follow the `size` variant
 * (read from context). Holds the `MeterFill`.
 */
export const MeterTrack = defineComponent({
  name: 'MeterTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="meter-track"
        class={cn('meter__track', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default MeterTrack
