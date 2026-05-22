import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_INPUT_GROUP_CONTEXT } from './date-input-group-context'

/**
 * DateInputGroup.Prefix — leading adornment (icon / text). HeroUI v3
 * `DateInputGroup.Prefix` (`data-slot="date-input-group-prefix"`).
 */
export const DateInputGroupPrefix = defineComponent({
  name: 'DateInputGroupPrefix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_INPUT_GROUP_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-prefix"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).prefix(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default DateInputGroupPrefix
