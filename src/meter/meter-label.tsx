import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * MeterLabel — the meter's label. HeroUI v3 `Meter`'s `Label` slot.
 *
 * Adapts HeroUI's `meter [data-slot="label"]`: a `w-fit text-sm font-medium`
 * label occupying the grid's `label` cell (top-left).
 */
export const MeterLabel = defineComponent({
  name: 'MeterLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="label"
        class={cn('w-fit text-sm font-medium text-foreground', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default MeterLabel
