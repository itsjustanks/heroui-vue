import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TimeFieldPrefix — leading adornment slot (icon / text). HeroUI v3
 * `TimeField.Prefix`. Adapts HeroUI's `date-input-group__prefix`.
 */
export const TimeFieldPrefix = defineComponent({
  name: 'TimeFieldPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="date-input-group-prefix"
        class={cn('date-input-group__prefix', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default TimeFieldPrefix
