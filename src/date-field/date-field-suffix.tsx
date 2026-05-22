import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'

/**
 * DateField.Suffix — trailing adornment (icon / button).
 * HeroUI v3 `DateField.Suffix` (maps to `DateInputGroupSuffix`).
 */
export const DateFieldSuffix = defineComponent({
  name: 'DateFieldSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_FIELD_CONTEXT, null)

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

export default DateFieldSuffix
