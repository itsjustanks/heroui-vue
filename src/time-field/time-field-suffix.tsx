import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TIME_FIELD_CONTEXT } from './time-field-context'

/**
 * TimeField.Suffix — trailing adornment (icon / button).
 * HeroUI v3 `TimeField.Suffix` (maps to `DateInputGroupSuffix`).
 */
export const TimeFieldSuffix = defineComponent({
  name: 'TimeFieldSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TIME_FIELD_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-suffix"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).suffix(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default TimeFieldSuffix
