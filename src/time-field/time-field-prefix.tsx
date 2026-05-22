import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TIME_FIELD_CONTEXT } from './time-field-context'

/**
 * TimeField.Prefix — leading adornment (icon / text).
 * HeroUI v3 `TimeField.Prefix` (maps to `DateInputGroupPrefix`).
 */
export const TimeFieldPrefix = defineComponent({
  name: 'TimeFieldPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TIME_FIELD_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-prefix"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).prefix(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default TimeFieldPrefix
