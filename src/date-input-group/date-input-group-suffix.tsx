import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_INPUT_GROUP_CONTEXT } from './date-input-group-context'

/**
 * DateInputGroup.Suffix — trailing adornment (icon / button). HeroUI v3
 * `DateInputGroup.Suffix` (`data-slot="date-input-group-suffix"`).
 */
export const DateInputGroupSuffix = defineComponent({
  name: 'DateInputGroupSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_INPUT_GROUP_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-suffix"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).suffix(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  },
})

export default DateInputGroupSuffix
