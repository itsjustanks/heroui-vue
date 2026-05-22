import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TimeFieldSuffix — trailing adornment slot (icon / button). HeroUI v3
 * `TimeField.Suffix`. Adapts HeroUI's `date-input-group__suffix`; `ml-auto`
 * pushes it to the trailing edge of the group.
 */
export const TimeFieldSuffix = defineComponent({
  name: 'TimeFieldSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="date-input-group-suffix"
        class={cn('date-input-group__suffix', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default TimeFieldSuffix
