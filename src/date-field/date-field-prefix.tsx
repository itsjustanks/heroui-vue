import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'

/**
 * DateField.Prefix — leading adornment (icon / text).
 * HeroUI v3 `DateField.Prefix` (maps to `DateInputGroupPrefix`).
 */
export const DateFieldPrefix = defineComponent({
  name: 'DateFieldPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_FIELD_CONTEXT, null)

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

export default DateFieldPrefix
